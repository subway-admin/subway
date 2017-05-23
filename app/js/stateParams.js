/**
 * Created by Loki.Luo on 2017/5/19.
 */
!function(factory) {
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        var target = module['exports'] || exports;
        factory(target);
    } else if (typeof define === 'function' && define['amd']) {
        define(['exports'], factory);
    } else {
        factory(window['stateParams'] = {});
    }
}(function(koExports) {
    var stateParams = typeof koExports !== 'undefined' ? koExports : {};
    stateParams.search = function () {
        // This function is anonymous, is executed immediately and
        // the return value is assigned to QueryString!
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        vars =  stateParams.clearTrim(vars);
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    };
    stateParams.clearTrim = function(array){
        for(var i = 0 ;i<array.length;i++)
        {
            if(array[i] == "" || typeof(array[i]) == "undefined" || array[i] == ",")
            {
                array.splice(i,1);
                i= i-1;
            }
        }
        return array;
    }
});