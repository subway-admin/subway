/**
 * Created by 11561 on 2017/5/23.
 */

layui.use(['form','element'], function(){
    var $ = layui.jquery
        ,element = layui.element(); //Tab的切换功能，切换事件监听等，需要依赖element模块
    var form = layui.form();
    loadCheckboxSelect();
    //增加测点
    $('.add-point').on('click',function(){
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
    });

    //数据分析
    $('.data-analysis').on('click',function(){
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

    });

    //沉降拟合
    $(document).on('click','.monitoring',function(){
        getTab.init({
            jquery:$,
            localUrl:"./chart-monitoring.html",
            success:function(res){
                element.tabAdd('station', {
                    title: '沉降拟合分析'
                    ,content: res
                    ,id: "monitoring"
                });
                layui.form().render();
                element.tabChange('station', 'monitoring');

                var myChart = echarts.init(document.getElementById('main'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: ""
                    },
                    tooltip: {
                        trigger:"axis"
                    },
                    legend: {
                        data:['温度']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: [0,400,800,1200,1600,2000,2400,2800,3200,3600,4000,4400,4800,5200,5600,6000,6400,6800,7200,7600]
                    },
                    yAxis: {
                        type: "value"
                    },
                    series: [
                        {
                            name:"温度",
                            type:"line",
                            stack: "里程",
                            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        })

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

});

