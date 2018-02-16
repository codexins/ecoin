// var baseUrl = "https://widgets.cryptocompare.com/";
// var scripts = document.getElementById("historical_price");
// var embedder = scripts;
// (function (){
// var appName = encodeURIComponent(window.location.hostname);
// if(appName==""){appName="local";}
// var s = document.createElement("script");
// s.type = "text/javascript";
// s.async = true;
// var theUrl = baseUrl+'serve/v1/coin/histo_week?fsym=BTC&tsym=USD';
// s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
// embedder.append(s);
// })();


baseUrl = "https://widgets.cryptocompare.com/";
var scripts = document.getElementsByTagName("script");
var embedder = scripts[ scripts.length - 1 ];
(function (){
var appName = encodeURIComponent(window.location.hostname);
if(appName==""){appName="local";}
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
var theUrl = baseUrl+'serve/v1/coin/histo_week?fsym=BTC&tsym=USD';
s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
embedder.parentNode.appendChild(s);
})();

