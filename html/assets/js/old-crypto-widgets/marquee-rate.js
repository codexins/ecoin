var baseUrl = "https://widgets.cryptocompare.com/";
var scripts = document.getElementById("marque_rate");
var embedder = scripts;
var cccTheme = {"General":{"priceText":"#404040","enableMarquee":true},"Currency":{"color":"#404040"},"Trend":{"colorDown":"#cf4e3e"}};
(function (){
var appName = encodeURIComponent(window.location.hostname);
if(appName==""){appName="local";}
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
var theUrl = baseUrl+'serve/v3/coin/header?fsyms=BTC,ETH,XMR,LTC,DASH&tsyms=USD,EUR,CNY,GBP';
s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
embedder.append(s);
})();