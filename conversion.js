(() => {
  const phone = '8615268656210';
  const lang = document.documentElement.lang || 'en';
  const labels = {
    en: { prompt: 'Need a sourcing quote?', whatsapp: 'WhatsApp quote', form: 'Quote form' },
    es: { prompt: '¿Necesita una cotización?', whatsapp: 'WhatsApp', form: 'Formulario' },
    'pt-BR': { prompt: 'Precisa de uma cotação?', whatsapp: 'WhatsApp', form: 'Formulário' },
    ru: { prompt: 'Нужен расчет закупки?', whatsapp: 'WhatsApp', form: 'Форма' },
    'zh-CN': { prompt: '需要采购报价？', whatsapp: 'WhatsApp', form: '询盘表' },
    fr: { prompt: 'Besoin d’un devis sourcing ?', whatsapp: 'WhatsApp', form: 'Formulaire' }
  };
  const copy = labels[lang] || labels.en;
  const title = (document.querySelector('h1')?.textContent || document.title || 'China sourcing request').replace(/\s+/g, ' ').trim();
  const productCode = document.querySelector('[data-current-product-code]')?.textContent?.trim();
  const referenceUrl = document.querySelector('link[rel="canonical"]')?.href || `${window.location.origin}${window.location.pathname}`;
  const pathDepth = Math.max(0, window.location.pathname.split('/').filter(Boolean).length - 1);
  const homePath = `${'../'.repeat(pathDepth)}index.html`;
  const contactFormHref = `${homePath}#contact`;
  const pageType = productCode
    ? 'product_detail'
    : document.body.classList.contains('article-page')
      ? 'blog_article'
      : document.body.classList.contains('blog-hub')
        ? 'blog_hub'
        : window.location.pathname === '/' || window.location.pathname.endsWith('/index.html')
          ? 'homepage'
          : 'site_page';
  const dockPrompt = productCode ? `Get price & MOQ · ${productCode}` : 'B2B buyer? Send photos for a quote';
  const message = productCode
    ? `Hello ROYAL UNION, I would like a quotation for ${productCode} — ${title}.\nQuantity:\nDestination market:\nTarget delivery date:\nReference page: ${referenceUrl}`
    : `Hello ROYAL UNION, I need sourcing support.\nProduct / category:\nQuantity:\nDestination market:\nTarget price or timeline:\nReference page: ${referenceUrl}`;

  // GA4 cannot report an AI citation by itself; it can only identify visits
  // where the assistant preserves a referrer or an explicit utm_source.
  const query = new URLSearchParams(window.location.search);
  const campaignSource = (query.get('utm_source') || '').toLowerCase();
  let referrerHost = '';
  try {
    referrerHost = document.referrer ? new URL(document.referrer).hostname.toLowerCase() : '';
  } catch (_) {
    referrerHost = '';
  }
  const aiReferrers = [
    { source: 'chatgpt', hosts: ['chatgpt.com', 'chat.openai.com'], campaigns: ['chatgpt', 'openai'] },
    { source: 'gemini', hosts: ['gemini.google.com', 'bard.google.com'], campaigns: ['gemini', 'google_ai'] },
    { source: 'perplexity', hosts: ['perplexity.ai'], campaigns: ['perplexity'] },
    { source: 'microsoft_copilot', hosts: ['copilot.microsoft.com'], campaigns: ['copilot', 'microsoft_copilot'] },
    { source: 'claude', hosts: ['claude.ai'], campaigns: ['claude', 'anthropic'] },
    { source: 'grok', hosts: ['grok.com'], campaigns: ['grok'] },
    { source: 'you_com', hosts: ['you.com'], campaigns: ['you.com', 'you_com'] }
  ];
  const aiMatch = aiReferrers.find((item) =>
    item.hosts.some((host) => referrerHost === host || referrerHost.endsWith(`.${host}`)) ||
    item.campaigns.includes(campaignSource)
  );
  const aiSource = aiMatch?.source || '';
  const getStoredAiSource = () => {
    try {
      return sessionStorage.getItem('royal_union_ai_source') || '';
    } catch (_) {
      return '';
    }
  };
  const baseEventParams = () => ({
    ai_source: aiSource || getStoredAiSource() || '(not_detected)',
    product_code: productCode || '(not_product_page)',
    page_type: pageType,
    page_path: window.location.pathname,
    page_title: document.title
  });
  const sendEvent = (eventName, params = {}) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        ...baseEventParams(),
        ...params
      });
    }
  };
  if (aiSource) {
    try {
      sessionStorage.setItem('royal_union_ai_source', aiSource);
    } catch (_) {
      // Analytics remains optional when storage is unavailable.
    }
    const sendAiReferral = () => {
      const eventKey = `royal_union_ai_referral:${aiSource}:${window.location.pathname}`;
      try {
        if (sessionStorage.getItem(eventKey)) return;
        sessionStorage.setItem(eventKey, '1');
      } catch (_) {
        // Send the event without de-duplication if storage is unavailable.
      }
      if (typeof window.gtag === 'function') {
        sendEvent('ai_referral_visit', {
          ai_source: aiSource,
          referrer_host: referrerHost || '(not_provided)',
          campaign_source: campaignSource || '(not_provided)'
        });
      }
    };
    if (document.readyState === 'complete') sendAiReferral();
    else window.addEventListener('load', sendAiReferral, { once: true });
  }

  let whatsapp = document.querySelector('a.whatsapp');
  if (!whatsapp) {
    whatsapp = document.createElement('a');
    whatsapp.className = 'whatsapp';
    whatsapp.target = '_blank';
    whatsapp.rel = 'noreferrer';
    whatsapp.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M19.1 17.4c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.8.9-.1.2-.3.2-.5.1-1.4-.7-2.4-1.6-3.3-3-.2-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.5-1.2-.7-1.7-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.1 1.7.1.5-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3zM16 3.2c7.1 0 12.8 5.7 12.8 12.8S23.1 28.8 16 28.8c-2.2 0-4.2-.6-5.9-1.6L3.2 28.8l1.7-6.7A12.7 12.7 0 0 1 3.2 16C3.2 8.9 8.9 3.2 16 3.2zm0 2.1C10.1 5.3 5.3 10.1 5.3 16c0 2 .6 3.8 1.5 5.4l-1 3.8 3.9-1c1.5.9 3.3 1.4 5.3 1.4 5.9 0 10.7-4.8 10.7-10.7S21.9 5.3 16 5.3z"/></svg><span></span>';
  }
  whatsapp.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  whatsapp.setAttribute('aria-label', `${copy.whatsapp}: ${copy.prompt}`);
  const whatsappLabel = whatsapp.querySelector('span');
  if (whatsappLabel) whatsappLabel.textContent = copy.whatsapp;

  const formLink = document.createElement('a');
  formLink.className = 'contact-dock-email';
  formLink.href = contactFormHref;
  formLink.dataset.inquiryFormLink = '';
  formLink.dataset.contactIntent = productCode ? 'floating_product_quote_form' : 'floating_quote_form';
  formLink.setAttribute('aria-label', `${copy.form}: ${copy.prompt}`);
  formLink.innerHTML = `<span aria-hidden="true">✎</span><b>${copy.form}</b>`;

  const dock = document.createElement('aside');
  dock.className = 'contact-dock';
  dock.setAttribute('aria-label', dockPrompt);
  dock.innerHTML = `<span class="contact-dock-label">${dockPrompt}</span>`;
  whatsapp.remove();
  dock.append(whatsapp, formLink);
  document.body.append(dock);

  if (document.body.classList.contains('article-page')) {
    const articleMain = document.querySelector('.article-main');
    if (articleMain && !articleMain.querySelector('.article-quick-inquiry')) {
      const articlePrompt = document.createElement('aside');
      articlePrompt.className = 'article-quick-inquiry';
      articlePrompt.setAttribute('aria-label', 'Sourcing quote request');
      articlePrompt.innerHTML = `
        <div>
          <p class="article-quick-kicker">Ready to compare suppliers?</p>
          <h2>Send your product brief before you leave this guide.</h2>
          <p>Share product photos or links, quantity, destination market and target timing. ROYAL UNION will review the sourcing route and practical next step.</p>
        </div>
        <div class="article-quick-actions">
          <a class="button button-primary" href="https://wa.me/${phone}?text=${encodeURIComponent(message)}" target="_blank" rel="noreferrer" data-contact-intent="article_inline_whatsapp">Send brief on WhatsApp <span>→</span></a>
          <a class="text-link" href="${contactFormHref}" data-inquiry-form-link data-contact-intent="article_inline_form">Use inquiry form <span>↓</span></a>
        </div>`;
      const insertionTarget = Array.from(articleMain.children).find((element) =>
        element.matches('.article-benefits, .article-direct-answer, p, h2')
      );
      if (insertionTarget) insertionTarget.insertAdjacentElement('afterend', articlePrompt);
      else articleMain.prepend(articlePrompt);
    }
  }

  const track = (channel, location, intent = '', link = null) => {
    const linkText = (link?.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80);
    const eventParams = {
      method: channel,
      contact_location: location,
      contact_intent: intent || linkText || '(not_labeled)',
      link_text: linkText || '(not_available)'
    };
    sendEvent('contact_click', eventParams);
    if (channel === 'whatsapp') {
      sendEvent('whatsapp_click', {
        ...eventParams,
        outbound_destination: 'whatsapp'
      });
      if (productCode) {
        sendEvent('product_inquiry_click', {
          ...eventParams,
          product_name: title
        });
      }
    }
    if (channel === 'inquiry_form') {
      sendEvent('inquiry_form_click', eventParams);
    }
  };

  document.querySelectorAll('a[href*="wa.me/"]').forEach((link) => {
    link.dataset.contactChannel = 'whatsapp';
    link.addEventListener('click', () => track('whatsapp', link.closest('.contact-dock') ? 'floating_dock' : 'page_content', link.dataset.contactIntent, link));
  });
  document.querySelectorAll('[data-inquiry-form-link]').forEach((link) => {
    link.dataset.contactChannel = 'inquiry_form';
    link.addEventListener('click', () => track('inquiry_form', link.closest('.contact-dock') ? 'floating_dock' : 'page_content', link.dataset.contactIntent, link));
  });

  if (productCode) {
    sendEvent('product_detail_view', {
      product_code: productCode,
      product_name: title
    });
  }

  let maxScrollPercent = 0;
  const updateScrollDepth = () => {
    const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const current = Math.round((window.scrollY / scrollable) * 100);
    maxScrollPercent = Math.max(maxScrollPercent, Math.min(100, current));
  };
  window.addEventListener('scroll', updateScrollDepth, { passive: true });
  window.setTimeout(() => {
    updateScrollDepth();
    sendEvent('qualified_visit', {
      engagement_seconds: 30,
      max_scroll_percent: maxScrollPercent
    });
  }, 30000);
})();
