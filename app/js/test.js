/**
 * Created by 11561 on 2017/5/14.
 */
//alert($('header').length);
asynLoad.ajax({
    //jquery:$,
    data:{},
    url:'api/bacInfo/mapping/serviceStatus',
    localUrl:'../test-data/menu.json',
    success:function(data, status, requestCode)
    {
        alert('success');
        console.log(data);
        // format.binding(data.data);
    },
    error:function(xhr, ajaxOptions, thrownError){
        console.log(xhr);
        console.log(ajaxOptions);
        console.log(thrownError);
    }
});