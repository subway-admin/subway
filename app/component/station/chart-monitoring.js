/**
 * Created by 11561 on 2017/6/1.
 */
layui.use(['form','element'], function() {
    var $ = layui.jquery
        , element = layui.element(); //Tab的切换功能，切换事件监听等，需要依赖element模块
    //var form = layui.form();

    //沉降拟合
    $(document).on('click','.monitoring',function(){
        if($("[lay-id='monitoring']").length>0){
            element.tabDelete('station', 'monitoring');
        }
        getTab.init({
            jquery:$,
            localUrl:"./chart-monitoring.html",
            success:function(res){
                element.tabAdd('station', {
                    title: '沉降数据分析'
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
                        boundaryGap: true,
                        data: [0,400,800,1200,1600,2000,2400,2800,3200,3600,4000,4400,4800,5200,5600,6000,6400,6800,7200,7600],
                        splitNumber:10
                    },
                    yAxis: {
                        type: "value",
                        splitNumber:5,
                        minInterval:0,
                        max:500
                    },
                    series: [
                        {
                            name:"温度",
                            type:"line",
                            stack: "里程",

                            lineStyle:{
                                normal:{
                                    type:"dashed"

                                }
                            },
                            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:"湿度",
                            type:"line",
                            stack: "里程",
                            data:[20, 232, 401, 34, 40, 30, 10,20, 12, 11, 34, 9, 30, 20,20, 32, 10, 13, 9, 30, 21]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        })
    });

    //曲率半径
    $(document).on('click','.radius',function(){

        if($("[lay-id='monitoring']").length>0){
            element.tabDelete('station', 'monitoring');
        }

        getTab.init({
            jquery:$,
            localUrl:"./chart-monitoring.html",
            success:function(res){
                element.tabAdd('station', {
                    title: '沉降数据分析'
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
                        boundaryGap: true,
                        data: [0,400,800,1200,1600,2000,2400,2800,3200,3600,4000,4400,4800,5200,5600,6000,6400,6800,7200,7600],
                        splitNumber:10
                    },
                    yAxis: {
                        type: "value",
                        splitNumber:5,
                        minInterval:0,
                        max:500
                    },
                    series: [
                        {
                            name:"温度",
                            type:"line",
                            stack: "里程",

                            lineStyle:{
                                normal:{
                                    type:"dashed",
                                    color:"#555555"
                                }
                            },
                            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:"湿度",
                            type:"line",
                            stack: "里程",
                            data:[20, 232, 401, 34, 40, 30, 10,20, 12, 11, 34, 9, 30, 20,20, 32, 10, 13, 9, 30, 21]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        })

    });

    //相对曲率半径
    $(document).on('click','.relativelyRadius',function(){

        if($("[lay-id='monitoring']").length>0){
            element.tabDelete('station', 'monitoring');
        }

        getTab.init({
            jquery:$,
            localUrl:"./chart-monitoring.html",
            success:function(res){
                element.tabAdd('station', {
                    title: '沉降数据分析'
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
                        boundaryGap: true,
                        data: [0,400,800,1200,1600,2000,2400,2800,3200,3600,4000,4400,4800,5200,5600,6000,6400,6800,7200,7600],
                        splitNumber:10
                    },
                    yAxis: {
                        type: "value",
                        splitNumber:5,
                        minInterval:0,
                        max:500
                    },
                    series: [
                        {
                            name:"温度",
                            type:"line",
                            stack: "里程",

                            lineStyle:{
                                normal:{
                                    type:"dashed",
                                    color:"green"
                                }
                            },
                            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:"湿度",
                            type:"line",
                            stack: "里程",
                            data:[20, 232, 401, 34, 40, 30, 10,20, 12, 11, 34, 9, 30, 20,20, 32, 10, 13, 9, 30, 21]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        })

    });
});
