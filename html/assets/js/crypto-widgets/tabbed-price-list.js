baseUrl = "https://widgets.cryptocompare.com/";
var scripts = document.getElementById("tabbed_price_list");
//var embedder = scripts[ scripts.length - 1 ];
var embedder = scripts;
var cccTheme = {"General":{"borderColor":"#ccc"},"Tabs":{"color":"#404040","activeColor":"#404040"},"Row":{"color":"#404040"},"Conversion":{"color":"#404040"}};
(function (){
var appName = encodeURIComponent(window.location.hostname);
if(appName==""){appName="local";}
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
var theUrl = baseUrl+'serve/v1/coin/multi?fsyms=BTC,ETH,XMR,LTC&tsyms=USD,EUR,CNY,GBP';
s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
embedder.append(s);
})();
