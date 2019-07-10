export default function jsonp(json){
    let fnName = 'artiList';//'jQuery_'+ (Date.now());
    window[fnName] = function (data){
       json.success (data);
    //    delete window[fnName];
        window[fnName] = null;
    }

    //动态创建都异步
    let oS = document.createElement('script');
    // oS.src = json.url + '?' +new URLSearchParams(json.data) + '&'+json.callback+'='+fnName;
    // json.data[json.callback] = fnName; 
    oS.src = json.url + '?' +new URLSearchParams(json.data);
    document.getElementsByTagName('head')[0].appendChild(oS);
    oS.remove();
}