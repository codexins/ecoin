baseUrl = "https://widgets.cryptocompare.com/";
var scripts = document.getElementById("btc_chart_widget");
var embedder = scripts;
var cccTheme = {"BigPrice":{"color":"#404040","symbolColor":"#2D93BA"},"SmallPrice":{"color":"#404040","symbolColor":"#2D93BA"},"Chart":{"labelBackground":"#2D93BA","fillColor":"rgba(49,81,217,.33)","borderColor":"#2D93BA"},"Trend":{"colorUnchanged":"#2D93BA"}};
(function (){
var appName = encodeURIComponent(window.location.hostname);
if(appName==""){appName="local";}
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
var theUrl = baseUrl+'serve/v1/coin/header?fsym=BTC&tsyms=USD,EUR,GBP,CNY';
s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
embedder.append(s);
})();

