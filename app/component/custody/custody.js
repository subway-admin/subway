/**
 * Created by 11561 on 2017/5/18.
 */
layui.use('form', function(){
    var
    //form = layui.form(),
        $ = layui.jquery;
    asynLoad.ajax({
        jquery:$,
        data:{},
        url:'',
        localUrl:'../../test-data/custody/custody.json',
        success:function(data, status, requestCode)
        {
            var monitoring=doT.template($("#monitoring").text());
            console.log(data);
            $("tbody").append(monitoring(data.data));

        },
        error:function(xhr, ajaxOptions, thrownError){
        }
    });
});
