var baseUrl = "https://widgets.cryptocompare.com/";
var scripts = document.getElementById("currency_price");
var embedder = scripts;
var cccTheme = {"Followers":{"color":"#2D93BA"},"EvenRow":{"color":"#404040","borderColor":"#CCC"},"OddRow":{"color":"#404040","borderColor":"#CCC"},"Trend":{"colorUnchanged":"#2D93BA"},"Conversion":{"color":"#404040"}};
(function (){
var appName = encodeURIComponent(window.location.hostname);
if(appName==""){appName="local";}
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
var theUrl = baseUrl+'serve/v1/coin/list?fsym=BTC&tsyms=USD,EUR,CNY,GBP,SGD,RUB,JPY,KRW';
s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
embedder.append(s);
})();
