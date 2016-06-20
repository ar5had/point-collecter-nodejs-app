'use strict';

(function () {
    var addButton = document.querySelector('.btn-add');
    var deleteButton = document.querySelector('.btn-delete');
    var clickNbr = document.querySelector('#click-nbr');
    var apiUrl = 'http://localhost:3000/api/clicks';
    
    function ready (fn) {
        
        if (typeof fn !== 'function')
            return;
        
        if (document.readyState === 'complete')
            return fn();
        
        document.addEventListener('DOMContentLoaded', fn, false);    
        
    }
    
    function ajaxRequest (method, url, callback) {
        var xmlHttp = new XMLHttpRequest();
        
        xmlHttp.onreadystatechange = function(){
            if(xmlHttp.readyState === 4 & xmlHttp.status === 400)
                callback(xmlHttp.response);
        }
        
        xmlHttp.open(method, url, true);
        xmlHttp.send();
    }
    
    function updateClickCount (data) {
        var clickObject = JSON.parse(data);
        clickNbr.innerHTML = clickObject.clicks;
    }
    
    ready(ajaxRequest('GET', apiUrl, updateClickCount));
})();