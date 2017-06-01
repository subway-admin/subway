/**
 * Created by 11561 on 2017/6/1.
 */
layui.use(['form','element'], function() {
    var $ = layui.jquery
        , element = layui.element(); //Tab的切换功能，切换事件监听等，需要依赖element模块
    //var form = layui.form();

    //沉降拟合
    $(document).on('dblclick','table tbody tr',function(){
        if($("[lay-id='convergence']").length>0){
            element.tabChange('station', 'convergence');
        }else{
            getTab.init({
            jquery:$,
            localUrl:"./chart-convergence.html",
            success:function(res){
                element.tabAdd('station', {
                    title: '累积沉降曲线'
                    ,content: res
                    ,id: "convergence"
                });
                layui.form().render();
                element.tabChange('station', 'convergence');

                var myChart = echarts.init(document.getElementById('convergence'));

                // 指定图表的配置项和数据
                option = {
                    title: {
                        left: 'center',
                        text: '收敛数据分析',
                        subtext: '纯属虚构'
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
                        nameTextStyle: {
                            fontSize:16,
                            fontWeight : 'bold'
                        },
                        nameGap: 35,
                        boundaryGap: false,
                        axisLabel: {
                            rotate: 90,
                            textStyle : {
                                fontWeight : 'bold'
                            }
                        },
                        data: ['2017/4/8','2017/4/8','2017/4/8','2017/4/8','2017/4/8','2017/4/8','2017/4/8','2017/4/8','2017/4/8']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'',
                            type:'line',
                            //data:[0, 0.1, 0.2],
                            //data:[0, 0.1, 0.2, 0.22, 0.23, 0.24, 0.25,0.28, 0.3],
                            data:[-0.3,-0.28,-0.25,-0.24,0, 0.1, 0.2, 0.22, 0.23, 0.24, 0.25,0.28, 0.3],
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
        })
        }
    });

});
