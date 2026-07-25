/* ================================================================
   UGOKU AI LP - Google Analytics 4 ローダー
   ----------------------------------------------------------------
   ★ 測定IDを変更する場合は、下の1行だけ書き換えてください。
     全ページがこのファイルを読み込んでいるため、
     このファイルを差し替えるだけで全記事に反映されます。
   ================================================================ */
var UGOKU_GA_ID = "G-EE7R6VFKYR";   // ←★ここにGA4の測定IDを貼る

(function () {
  if (!UGOKU_GA_ID || UGOKU_GA_ID.indexOf("XXXX") !== -1) {
    console.warn("[UGOKU] GA4測定IDが未設定です: assets/ga.js を編集してください");
    return;
  }
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + UGOKU_GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", UGOKU_GA_ID);

  /* CTAクリックをコンバージョンとして計測（電話・メール・問い合わせ） */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a");
    if (!a || !a.href) return;
    if (a.href.indexOf("tel:") === 0) {
      gtag("event", "cta_tel", { link_url: a.href, page_path: location.pathname });
    } else if (a.href.indexOf("mailto:") === 0) {
      gtag("event", "cta_mail", { link_url: a.href, page_path: location.pathname });
    } else if (/contact|form|entry|apply|line\.me|lin\.ee/i.test(a.href)) {
      gtag("event", "cta_contact", { link_url: a.href, page_path: location.pathname });
    }
  }, true);
})();
