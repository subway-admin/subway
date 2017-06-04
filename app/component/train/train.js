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

});

