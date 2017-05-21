/**
 * Created by 11561 on 2017/5/14.
 */
layui.use('layer', function(){
    var layer = layui.layer,
    $ = layui.jquery;
    $('#customAnalysis').on('click',function(){
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
layui.use('form', function(){
        var form = layui.form();
});

//layui.jquery('.confirm').on('click','.save',function(){
//    alert();
//    //layerSer.close();
//})
