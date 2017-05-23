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
        factory(window['getTab'] = {}, asynLoad, config);
    }
}(function(koExports) {
    var getTab = typeof koExports !== 'undefined' ? koExports : {};
    var $ = null;
    getTab.defData = {
            data:{"test":'uu',para:'rr'},
            type: "GET",
            template:true,
            loading:false,
            dataType:'html',
            url:'',
            localUrl:'',
            success:function(data, status, requestCode)
            {

            },
            error:function(){
            }
    };

    getTab.init = function(asynData,layerData) {
        $ = asynData.jquery;
        $.extend(getTab.defData,asynData);
        $.extend(getTab.layerDefData,layerData);
        getTab.defData.url = getTab.defData.localUrl;
        asynLoad.ajax(getTab.defData);
    };




});
