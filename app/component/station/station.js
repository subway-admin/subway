/**
 * Created by 11561 on 2017/5/23.
 */

layui.use(['form','element','upload'], function(){
    var $ = layui.jquery
        ,element = layui.element(); //Tab的切换功能，切换事件监听等，需要依赖element模块
    var form = layui.form();
    layui.upload();
    loadCheckboxSelect();
    //增加测点
    $('.add-point').on('click',function(){
        if($("[lay-id='add-point']").length>0){
            element.tabChange('station', 'add-point');
        }else{
            getTab.init({
                jquery:$,
                localUrl:"./add-point.html",
                success:function(res){
                    element.tabAdd('station', {
                        title: '新增收敛测点'
                        ,content: res
                        ,id:'add-point'
                    });
                    layui.form().render();
                    element.tabChange('station', 'add-point');
                }
            });
        }
    });

    //数据分析
    $('.data-analysis').on('click',function(){
        if($("[lay-id='data-analysis']").length>0){
            element.tabChange('station', 'data-analysis');
        }else{
            getTab.init({
                jquery:$,
                localUrl:"./data-analysis.html",
                success:function(res){
                    element.tabAdd('station', {
                        title: '自定义数据分析'
                        ,content: res
                        ,id: "data-analysis"
                    });
                    layui.form().render();
                    element.tabChange('station', 'data-analysis');
                }
            })
        }
    });



    //自定义数据分析弹窗
    $(document).on('click','#customAnalysis',function(){
        layerSer.init({
            jquery:$,
            localUrl:"./data-analysis-dialog.html"
        },{
            title:"自定义分析条件",
            area: ['700px',''],
            btn:"",
            id:"data-analysis-dialog",
            callback:function(){
                //弹框逻辑执行
                $('.confirm').on('click','.save,.cancle',function(){
                    layerSer.close();
                })
            }
        });
    });

    $(document).on('click','.curve',function(){
        layerSer.init({
            jquery:$,
            localUrl:"./curve-dialog.html"
        },{
            title:"自定义分析条件",
            area: ['1000px',''],
            btn:"",
            id:"data-curve-dialog",
            callback:function(){
                //弹框逻辑执行
                var myChart = echarts.init(document.getElementById('curve-dialog'));

                // 指定图表的配置项和数据
                option = {
                    title: {
                        left: 'center',
                        text: '收敛数据分析',
                        //subtext: '纯属虚构'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['','里程']
                    },
                    toolbox: {
                        feature: {
                            restore: {title: '重新断面'},
                            saveAsImage: {}
                        },
                        right:50
                    },
                    xAxis:  {
                        type: 'category',
                        name: '里程',
                        nameLocation: 'middle',
                        splitLine: {show: false},
                        nameTextStyle: {
                            fontSize:16,
                            fontWeight : 'bold'
                        },
                        nameGap: 35,
                        boundaryGap: true,
                        axisLabel: {
                            rotate: 0,
                            textStyle : {
                                fontWeight : 'normal'
                            }
                        },
                        data: ['2014/5/7','2014/5/7','2014/5/7','2014/5/7','2014/5/7','2014/5/7','2014/5/7','2014/5/7','2014/5/7']

                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '10%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'',
                            type:'line',
                            //data:[0, 0.1, 0.2],
                            data:[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
                            //data:[-0.3,-0.28,-0.25],
                            markLine: {
                                data: [
                                    {yAxis:180,name:'阈值控制'}
                                ]
                            }
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        });
    })

});

