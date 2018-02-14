var baseUrl = "https://widgets.cryptocompare.com/";
var scripts = document.getElementById("currency_converter");
//var embedder = scripts[ scripts.length - 1 ];
var embedder = scripts;
var cccTheme = {"General":{"borderWidth":"0px","borderColor":"transparent","headerTextColor":"#404040","poweredByColor":"#404040"},"Form":{"borderColor":"#CCC","inputColor":"#404040"}};
(function (){
var appName = encodeURIComponent(window.location.hostname);
if(appName==""){appName="local";}
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
var theUrl = baseUrl+'serve/v1/coin/converter?fsym=BTC&tsyms=USD,EUR,CNY,GBP,SGD,RUB,JPY,KRW,PLN,INR,MXN,AUD,AED,SEK,CAD,ZAR';
s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
embedder.append(s);
})();

