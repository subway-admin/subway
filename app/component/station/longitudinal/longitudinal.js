/**
 * Created by 11561 on 2017/5/18.
 */
layui.use('element',function(){
    var $ = layui.jquery,
    element = layui.element();
    asynLoad.ajax({
        jquery:$,
        data:{},
        url:'',
        localUrl:'../../../test-data/interval/horizontal-displacement.json',
        success:function(data, status, requestCode)
        {
            var monitoring=doT.template($("#monitoring").text());
            console.log(data);
            $("tbody").append(monitoring(data.data));

        },
        error:function(xhr, ajaxOptions, thrownError){
        }
    });

    //点击增加测点
    $('#add-point').on('click',function() {
        parent.addTab({
            title: "新增沉降监测点"//用于演示
            ,content: '<iframe frameborder="0" src="../component/station/add-point/add-point.html" class="x-iframe"></iframe>'
        });
    });
    $('#data-analysis').on('click',function() {
        parent.addTab({
            title: "沉降数据分析"//用于演示
            ,content: '<iframe frameborder="0" src="../component/station/data-analysis/data-analysis.html" class="x-iframe"></iframe>'
        });
    })
});
