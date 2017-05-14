/**
 * Created by Loki.Luo on 2017/3/1.
 */
/**
 *封装ajax请求函数
 * 加入判断页面是否需要在登录条件下才能打开
 * 加入默认参数和默认函数
 *
 *  **/

!function(factory) {
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        var target = module['exports'] || exports;
        factory(target);
    } else if (typeof define === 'function' && define['amd']) {
        define('asynLoad',['exports','config'], factory);
    } else {
        factory(window['asynLoad'] = {},config);
    }
}(function(koExports,config){
    //if(layer)
    //layer.config({
    //    path: '../../bower_components/layer/src/'
    //});
    var asynLoad = typeof koExports !== 'undefined' ? koExports : {};
    var $ = null;
    asynLoad.init = function(opt){
        $ = opt.jquery;
        delete opt.jquery;
        asynLoad.defOption = {
            url:'',
            asyn: true,
            data:{
                accessToken:localStorage.accessToken
            },
            bindingKey:'key',
            forbidBindingKey:false,
            loading:true,
            dataType: "json",
            contentType:'application/json',
            cache: false,
            success:function(data, status, requestCode){
            },
            error:function(data, status, requestCode){
                //console.log(data,status,requestCode);
            },
            beforeSend:function(data){
            },
            complete:function(data, status, requestCode){
                //consumerModel.loadingClose();
                //setTimeout(function(){ layer.close(asynLoad.loadingId); }, 100);
                //alert('complete');
            }
        };

        //判断是否是做测试
        opt = asynLoad.testLoad(opt);
        //alert(JSON.stringify(opt));
        opt.data = $.extend(asynLoad.defOption.data,opt.data);
        asynLoad.defOption = $.extend(asynLoad.defOption,opt);
        opt.url = asynLoad.temUrl;
        if(asynLoad.defOption.loading)
            //asynLoad.loadingId = layer.load(1, {
            //    shade: [0.1,'#000']
            //});
            // dialog.loading();

        asynLoad.successGlobalCb();
        asynLoad.errorGlobalCb();
    };

    asynLoad.successGlobalCb = function(){
        var success = asynLoad.defOption.success;
        asynLoad.defOption.success = function(data, status, requestCode){
            success(data,status, requestCode);
        };
    };

    asynLoad.errorGlobalCb = function(){
        var error = asynLoad.defOption.error;
        asynLoad.defOption.error = function(data, status, requestCode){
            if(status=='error'){
                //layer.msg('系统异常', {
                //    time: 3000
                //});
            }
            if(status == 'timeout'){
                //layer.msg('请求超时', {
                //    time: 3000
                //});
            }
            error(data,status,requestCode);
        }
    };

    asynLoad.testLoad = function(opt){
        if(!opt.template){
            if(!config.TEST){
                asynLoad.temUrl = opt.url;
                opt.url = config.DOMAIN + opt.url;
            }else{
                opt.url = opt.localUrl;
            }
            opt.type = config.REQUIRT_STYLE;
        }
        opt.timeout = config.TIMEOUT;
        return opt;
    };

    asynLoad.ajax = function(opt){
        asynLoad.init(opt);
        //asynLoad.defOption.data = JSON.stringify(asynLoad.defOption.data);
        $.ajax(asynLoad.defOption).then(function(data){
            //alert(JSON.stringify(data));
            if(asynLoad.defOption.cb){
                asynLoad.defOption.cb(data);
            }
            if(data.status == 'SUCCESS' && !asynLoad.defOption.forbidBindingKey){
                //format.getAsynData(data.data);
            }
            //恢复forbidBindingKey为false
            if(asynLoad.defOption.forbidBindingKey){
                asynLoad.defOption.forbidBindingKey = false;
            }
        });
    };

});






