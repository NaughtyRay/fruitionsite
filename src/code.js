// ========= Fruition core mapping =========

// 🔴 把你的 Notion 页面 ID 放在这里（只要 ID，不要 URL）
const notionPageId = "2e68eaed880a80a0ac37f290b01a482a";

// 可选：自定义域名（可留空）
const customDomain = "carrie-clara.com";

// 是否启用子路径（不要动）
const useSubdomain = false;

// ========= DO NOT EDIT BELOW =========

(function () {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/stephenou/fruition@master/app.min.js";
  script.defer = true;

  script.onload = function () {
    window.Fruition && window.Fruition({
      pageId: notionPageId,
      domain: customDomain,
      useSubdomain: useSubdomain,
    });
  };

  document.head.appendChild(script);
})();
