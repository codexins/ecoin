var baseUrl = "https://widgets.cryptocompare.com/";
var scripts = document.getElementById("tabbed_price_list");
var embedder = scripts;
var cccTheme = {"General":{"borderColor":"#CCC"},"Tabs":{"color":"#404040","activeColor":"#333"},"Row":{"color":"#404040","borderColor":"#CCC"},"Conversion":{"color":"#404040"}};
(function (){
var appName = encodeURIComponent(window.location.hostname);
if(appName==""){appName="local";}
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
var theUrl = baseUrl+'serve/v1/coin/multi?fsyms=BTC,ETH,XMR,LTC,DASH&tsyms=USD,EUR,GBP,CNY,AUD';
s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
embedder.append(s);
})();

