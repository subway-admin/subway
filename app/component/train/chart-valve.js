/**
 * Created by 11561 on 2017/6/1.
 */
layui.use(['form','element'], function() {
    var $ = layui.jquery
        , element = layui.element(); //Tab的切换功能，切换事件监听等，需要依赖element模块
    //var form = layui.form();

    //沉降拟合
    $(document).on('click','#valve',function(){
        if($("[lay-id='data-valve']").length>0){
            element.tabChange('station', 'data-valve');
        }else{
            getTab.init({
            jquery:$,
            localUrl:"./chart-valve.html",
            success:function(res){
                element.tabAdd('station', {
                    title: '收敛数据分析'
                    ,content: res
                    ,id: "data-valve"
                });
                layui.form().render();
                element.tabChange('station', 'data-valve');

                var myChart = echarts.init(document.getElementById('chart-valve'));

                // 指定图表的配置项和数据
                option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['里程']
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
                        data: ['0','400','800','1200','1600','2000','2400','2800','3200','3600','4000','4400','4800','5200','5600','6000','6400','6800','7200','7600']

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
                            data:[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8,12,0.2, 0.1, 0.2, 10, 0.4, 0.5, 0.6, 0.7, 0.8, 0.2],
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
        })
        }
    });

});
