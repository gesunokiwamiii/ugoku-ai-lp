/* UGOKU AI LP - GA4 ローダー（測定ID変更はこの1行だけ） */
var UGOKU_GA_ID = "G-EE7R6VFKYR";
(function(){
  if(!UGOKU_GA_ID||UGOKU_GA_ID.indexOf("XXXX")!==-1){console.warn("[UGOKU] GA4 ID未設定");return;}
  var s=document.createElement("script");s.async=true;
  s.src="https://www.googletagmanager.com/gtag/js?id="+UGOKU_GA_ID;document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
  gtag("js",new Date());gtag("config",UGOKU_GA_ID);
  document.addEventListener("click",function(e){
    var a=e.target.closest&&e.target.closest("a");if(!a||!a.href)return;
    if(a.href.indexOf("tel:")===0)gtag("event","cta_tel",{link_url:a.href,page_path:location.pathname});
    else if(a.href.indexOf("mailto:")===0)gtag("event","cta_mail",{link_url:a.href,page_path:location.pathname});
    else if(/contact|form|entry|apply|line\.me|lin\.ee|docs\.google/i.test(a.href))gtag("event","cta_contact",{link_url:a.href,page_path:location.pathname});
  },true);
})();