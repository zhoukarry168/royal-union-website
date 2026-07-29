# ROYAL UNION multilingual publishing standard

Supported website languages are English (`en`), Spanish (`es`), Brazilian Portuguese (`pt-BR`), Russian (`ru`), Simplified Chinese (`zh-CN`) and French (`fr`).

## New page checklist

1. Add the page in English with a stable URL.
2. Add the same language selector and `i18n.js` reference used on the homepage.
3. Add every buyer-facing string to `i18n.js` and provide all five non-English translations before publishing.
4. Add self-referencing canonical and the six reciprocal `hreflang` links.
5. Add each language URL to `sitemap.xml` only after its translated content is ready to index.
6. Do not use automatic IP or browser-language redirects. Let buyers choose their language.

The temporary Blog & Insights page remains `noindex` until it contains substantive localized articles.
