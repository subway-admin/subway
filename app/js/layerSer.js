/**
 * Created by Loki.Luo on 2017/4/6.
 */
! function(factory) {
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        var target = module['exports'] || exports;
        factory(target);
    } else if (typeof define === 'function' && define['amd']) {
        define(['exports','asynLoad','config','layer'], factory);
    } else {
        factory(window['layerSer'] = {}, asynLoad, config);
    }
}(function(koExports) {
    var layerSer = typeof koExports !== 'undefined' ? koExports : {};
    var $ = null;
    layerSer.defData = {
            data:{"test":'uu',para:'rr'},
            type: "GET",
            template:true,
            loading:false,
            dataType:'html',
            url:'',
            localUrl:'',
            success:function(data, status, requestCode)
            {
                layerSer.success(data);
            },
            error:function(){
            }
    };
    console.log(layerSer.defData.url);
    layerSer.layerDefData = {
        //className: 'chooseProductSale',
        //type: 1,
        //anim: 'up',
        yes: function(index) {
        },
        success: function(elem) {
            layui.form().render();
        }
    };
    layerSer.id = null;

    layerSer.init = function(asynData,layerData) {
        $ = asynData.jquery;
        $.extend(layerSer.defData,asynData);
        $.extend(layerSer.layerDefData,layerData);
        layerSer.defData.url = layerSer.defData.localUrl;
        asynLoad.ajax(layerSer.defData);
    };

    layerSer.success = function(res){
        var $content = $('<div>');
        $content.html(res);
        layerSer.layerDefData.content = $content.html();
        layerSer.id = layer.open(layerSer.layerDefData);
        layerSer.layerDefData.callback();
    }

    layerSer.close = function(){
        layer.close(layerSer.id);
    }



});
