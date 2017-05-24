/**
 * Created by 11561 on 2017/5/24.
 */
layui.use(['form','element'], function() {
    var $ = layui.jquery
        , element = layui.element(); //Tab的切换功能，切换事件监听等，需要依赖element模块
    var form = layui.form();
console.log(form);
    $(document).on('click','#add-next-point',function(){

        element.tabDelete('station', 'add-point');
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
    });


})