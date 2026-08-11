(() => {
  const phone = '8615268656210';
  const email = 'sales5@royalunion.com.cn';
  const lang = document.documentElement.lang || 'en';
  const labels = {
    en: { prompt: 'Need a sourcing quote?', whatsapp: 'WhatsApp', email: 'Email' },
    es: { prompt: '¿Necesita una cotización?', whatsapp: 'WhatsApp', email: 'Correo' },
    'pt-BR': { prompt: 'Precisa de uma cotação?', whatsapp: 'WhatsApp', email: 'E-mail' },
    ru: { prompt: 'Нужен расчет закупки?', whatsapp: 'WhatsApp', email: 'Email' },
    'zh-CN': { prompt: '需要采购报价？', whatsapp: 'WhatsApp', email: '邮件' },
    fr: { prompt: 'Besoin d’un devis sourcing ?', whatsapp: 'WhatsApp', email: 'E-mail' }
  };
  const copy = labels[lang] || labels.en;
  const title = (document.querySelector('h1')?.textContent || document.title || 'China sourcing request').replace(/\s+/g, ' ').trim();
  const productCode = document.querySelector('[data-current-product-code]')?.textContent?.trim();
  const message = productCode
    ? `Hello ROYAL UNION, I would like a quotation for ${productCode} — ${title}.\nQuantity:\nDestination market:\nTarget delivery date:`
    : `Hello ROYAL UNION, I need sourcing support.\nProduct / category: ${title}\nQuantity:\nDestination market:\nTarget price or timeline:`;

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
        window.gtag('event', 'ai_referral_visit', {
          ai_source: aiSource,
          referrer_host: referrerHost || '(not_provided)',
          campaign_source: campaignSource || '(not_provided)',
          page_path: window.location.pathname,
          page_title: document.title
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

  const emailLink = document.createElement('a');
  emailLink.className = 'contact-dock-email';
  emailLink.href = `mailto:${email}?subject=${encodeURIComponent(`Sourcing enquiry — ${title}`)}&body=${encodeURIComponent(`${message}\n\nName:\nCompany:`)}`;
  emailLink.setAttribute('aria-label', `${copy.email}: ${copy.prompt}`);
  emailLink.innerHTML = `<span aria-hidden="true">✉</span><b>${copy.email}</b>`;

  const dock = document.createElement('aside');
  dock.className = 'contact-dock';
  dock.setAttribute('aria-label', copy.prompt);
  dock.innerHTML = `<span class="contact-dock-label">${copy.prompt}</span>`;
  whatsapp.remove();
  dock.append(whatsapp, emailLink);
  document.body.append(dock);

  const track = (channel, location) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'contact_click', {
        method: channel,
        contact_location: location,
        ai_source: aiSource || getStoredAiSource() || '(not_detected)',
        page_path: window.location.pathname,
        page_title: document.title
      });
    }
  };

  document.querySelectorAll('a[href*="wa.me/"]').forEach((link) => {
    link.dataset.contactChannel = 'whatsapp';
    link.addEventListener('click', () => track('whatsapp', link.closest('.contact-dock') ? 'floating_dock' : 'page_content'));
  });
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.dataset.contactChannel = 'email';
    link.addEventListener('click', () => track('email', link.closest('.contact-dock') ? 'floating_dock' : 'page_content'));
  });
})();
