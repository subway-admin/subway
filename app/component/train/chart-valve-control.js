/**
 * Created by 11561 on 2017/6/1.
 */
layui.use(['form','element'], function() {
    var $ = layui.jquery
        , element = layui.element(); //Tab的切换功能，切换事件监听等，需要依赖element模块
    //var form = layui.form();

    //沉降拟合
    $(document).on('click','#valve-control',function(){
        if($("[lay-id='data-valve']").length>0){
            element.tabChange('station', 'data-valve-control');
        }else{
            getTab.init({
            jquery:$,
            localUrl:"./chart-valve-control.html",
            success:function(res){
                element.tabAdd('station', {
                    title: '阀值控制'
                    ,content: res
                    ,id: "data-valve-control"
                });
                layui.form().render();
                element.tabChange('station', 'data-valve-control');

                var myChart = echarts.init(document.getElementById('chart-valve-control'));

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
                            data:[100,150,-100,130,50,-300,-30,8777,90,-30,-78,5151,-5515,-5151,-51,66,666,799,-4111,55,0,52,11,-44,66,77,-19,-6611,-6511,-410,555],
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
