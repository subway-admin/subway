/**
 * Created by Loki.Luo on 2017/3/2.
 */
!function(factory) {
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        var target = module['exports'] || exports;
        factory(target);
    } else if (typeof define === 'function' && define['amd']) {
        define('config',['exports'], factory);
    } else {
        factory(window['config'] = {});
    }
}(function(koExports) {
    var config = typeof koExports !== 'undefined' ? koExports : {};

        // config.TEST=false;
        // config.REQUIRT_STYLE="POST";

        config.TEST=true;
        config.REQUIRT_STYLE="GET";

        config.TIMEOUT=10000;
        // config.DOMAIN="http://dev.gsstcloud.com:8010/hotpot/";
        config.DOMAIN="localhost:8087/";

        config.mappingUrl = 'api/bacInfo/mapping/';

        config.IMGURL=""
});

