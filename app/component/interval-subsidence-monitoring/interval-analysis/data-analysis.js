/**
 * Created by 11561 on 2017/5/14.
 */
layui.use('layer', function(){
    var layer = layui.layer,
    $ = layui.jquery;
    $("input[name='customAnalysis']").on('click',function(){
        layer.open({
            type: 1,
            content: 'data-analysis-dialog.html'
        });
    });

    //asynLoad.ajax({
    //    jquery:$,
    //    data:{},
    //    url:'',
    //    localUrl:'../../test-data/monitoring.json',
    //    success:function(data, status, requestCode)
    //    {
    //        var monitoring=doT.template($("#monitoring").text());
    //        console.log(data);
    //        $("tbody").append(monitoring(data.data));
    //    },
    //    error:function(xhr, ajaxOptions, thrownError){
    //    }
    //});
});
layui.use('form', function(){
        var form = layui.form();
});