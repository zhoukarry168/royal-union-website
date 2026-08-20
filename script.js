const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
const heroCarousel = document.querySelector('[data-hero-carousel]');
if (heroCarousel) {
  const slides = Array.from(heroCarousel.querySelectorAll('.hero-slide'));
  const dots = Array.from(heroCarousel.querySelectorAll('[data-hero-slide]'));
  const previous = heroCarousel.querySelector('[data-hero-prev]');
  const next = heroCarousel.querySelector('[data-hero-next]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains('is-active')));
  let timer;
  let pointerStartX = null;

  const showSlide = (nextIndex, announce = false) => {
    activeIndex = (nextIndex + slides.length) % slides.length;
    slides[activeIndex]?.classList.add('is-media-ready');
    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
      slide.inert = !isActive;
    });
    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
      dot.tabIndex = isActive ? 0 : -1;
    });
    if (announce) heroCarousel.setAttribute('aria-label', `ROYAL UNION sourcing highlight ${activeIndex + 1} of ${slides.length}`);
  };

  const stopAutoplay = () => { window.clearInterval(timer); timer = undefined; };
  const startAutoplay = () => {
    stopAutoplay();
    if (!reduceMotion.matches) timer = window.setInterval(() => showSlide(activeIndex + 1), 7000);
  };

  previous?.addEventListener('click', () => { showSlide(activeIndex - 1, true); startAutoplay(); });
  next?.addEventListener('click', () => { showSlide(activeIndex + 1, true); startAutoplay(); });
  dots.forEach((dot, index) => dot.addEventListener('click', () => { showSlide(index, true); startAutoplay(); }));
  heroCarousel.addEventListener('mouseenter', stopAutoplay);
  heroCarousel.addEventListener('mouseleave', startAutoplay);
  heroCarousel.addEventListener('focusin', stopAutoplay);
  heroCarousel.addEventListener('focusout', (event) => { if (!heroCarousel.contains(event.relatedTarget)) startAutoplay(); });
  heroCarousel.addEventListener('pointerdown', (event) => { pointerStartX = event.clientX; });
  heroCarousel.addEventListener('pointerup', (event) => {
    if (pointerStartX === null) return;
    const delta = event.clientX - pointerStartX;
    if (Math.abs(delta) > 45) { showSlide(activeIndex + (delta < 0 ? 1 : -1), true); startAutoplay(); }
    pointerStartX = null;
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopAutoplay(); else startAutoplay(); });
  reduceMotion.addEventListener?.('change', startAutoplay);
  showSlide(activeIndex);
  if (!reduceMotion.matches) window.setTimeout(() => slides[1]?.classList.add('is-media-ready'), 3500);
  startAutoplay();
}

const reduceMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = Array.from(document.querySelectorAll('main > section, .buyer-grid article, .capability-grid > article, .process-list li, .global-reach-stats div'));
document.documentElement.classList.add('js-enabled');

if (reduceMotionPreference.matches || !('IntersectionObserver' in window)) {
  revealTargets.forEach((target) => target.classList.add('is-visible'));
} else {
  revealTargets.forEach((target) => target.classList.add('reveal-on-scroll'));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -35px' });
  revealTargets.forEach((target) => revealObserver.observe(target));
}

const deferredStatement = document.querySelector('.statement');
if (deferredStatement) {
  if ('IntersectionObserver' in window) {
    const statementObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      deferredStatement.classList.add('is-media-ready');
      statementObserver.disconnect();
    }, { rootMargin: '300px 0px' });
    statementObserver.observe(deferredStatement);
  } else {
    deferredStatement.classList.add('is-media-ready');
  }
}
const navGroups = Array.from(document.querySelectorAll('.nav-group'));
const desktopHover = window.matchMedia('(hover: hover) and (pointer: fine)');
const closeAllNavGroups = () => navGroups.forEach((group) => group.removeAttribute('open'));
navGroups.forEach((group) => {
  const summary = group.querySelector('summary');
  group.addEventListener('mouseenter', () => {
    if (!desktopHover.matches) return;
    navGroups.forEach((otherGroup) => {
      if (otherGroup !== group) otherGroup.removeAttribute('open');
    });
    group.setAttribute('open', '');
  });
  group.addEventListener('mouseleave', () => {
    if (desktopHover.matches) group.removeAttribute('open');
  });
  summary?.addEventListener('click', (event) => {
    if (desktopHover.matches) event.preventDefault();
  });
});
navigation?.addEventListener('mouseleave', () => {
  if (desktopHover.matches) closeAllNavGroups();
});
document.querySelector('#year').textContent = new Date().getFullYear();
const inquiryForm = document.querySelector('#inquiry-form');

if (inquiryForm) {
  // The receiving mailbox is assembled at runtime so it is not exposed as a
  // plain address in the public HTML or JavaScript source.
  const recipient = ['sales5', 'royalunion', 'com', 'cn'];
  const formEndpoint = `https://formsubmit.co/ajax/${recipient[0]}@${recipient[1]}.${recipient[2]}.${recipient[3]}`;
  const minimumCompletionTime = 5000;
  let formOpenedAt = Date.now();
  inquiryForm.action = formEndpoint;
  inquiryForm.method = 'post';
  const submitButton = inquiryForm.querySelector('button[type="submit"]');
  const formStatus = document.createElement('p');
  formStatus.className = 'form-status';
  formStatus.setAttribute('role', 'status');
  formStatus.setAttribute('aria-live', 'polite');
  inquiryForm.append(formStatus);

  const locale = document.documentElement.lang;
  const formCopy = {
    en: { name: 'Full name', email: 'Business email', whatsapp: 'WhatsApp number (optional)', company: 'Company', market: 'Primary market', requestType: 'What sourcing help do you need?', quantity: 'Expected order quantity', destination: 'Destination country', source: 'What are you looking to source?', confirm: 'I am contacting ROYAL UNION to buy or source products, not to sell services.', buyerOnly: '<strong>Product buyers only.</strong> This form is for sourcing, purchasing, OEM, quality control and consolidation requests. SEO, website, marketing, recruitment and supplier sales offers are not accepted.', sending: 'Sending your request…', success: 'Thank you. Your sourcing request has been sent.', filtered: 'This form only accepts product sourcing enquiries. Buyers should include a product or category, quantity and destination.', error: 'We could not send your request. Please retry or contact us on WhatsApp.' },
    es: { name: 'Nombre completo', email: 'Correo empresarial', whatsapp: 'Número de WhatsApp (opcional)', company: 'Empresa', market: 'Mercado principal', requestType: '¿Qué ayuda de abastecimiento necesita?', quantity: 'Cantidad prevista del pedido', destination: 'País de destino', source: '¿Qué producto desea comprar?', confirm: 'Contacto a ROYAL UNION para comprar o abastecer productos, no para vender servicios.', buyerOnly: '<strong>Solo compradores de productos.</strong> Este formulario es para solicitudes de abastecimiento, compras, OEM, control de calidad y consolidación. No se aceptan ofertas de servicios.', sending: 'Enviando su solicitud…', success: 'Gracias. Su solicitud de abastecimiento se ha enviado.', filtered: 'Este formulario solo acepta consultas de compra de productos. Incluya producto, cantidad y destino.', error: 'No hemos podido enviar su solicitud. Inténtelo de nuevo o use WhatsApp.' },
    'pt-BR': { name: 'Nome completo', email: 'E-mail corporativo', whatsapp: 'Número do WhatsApp (opcional)', company: 'Empresa', market: 'Mercado principal', requestType: 'Que tipo de apoio de sourcing precisa?', quantity: 'Quantidade prevista do pedido', destination: 'País de destino', source: 'Que produto deseja comprar?', confirm: 'Estou contatando a ROYAL UNION para comprar produtos, não para vender serviços.', buyerOnly: '<strong>Somente compradores de produtos.</strong> Este formulário é para sourcing, compras, OEM, controle de qualidade e consolidação. Ofertas de serviços não são aceitas.', sending: 'Enviando sua solicitação…', success: 'Obrigado. Sua solicitação de sourcing foi enviada.', filtered: 'Este formulário aceita apenas consultas de compra de produtos. Inclua produto, quantidade e destino.', error: 'Não foi possível enviar sua solicitação. Tente novamente ou use o WhatsApp.' },
    ru: { name: 'Полное имя', email: 'Рабочий e-mail', whatsapp: 'Номер WhatsApp (необязательно)', company: 'Компания', market: 'Основной рынок', requestType: 'Какая помощь по закупкам вам нужна?', quantity: 'Ожидаемый объем заказа', destination: 'Страна назначения', source: 'Какой товар вы хотите закупить?', confirm: 'Я обращаюсь в ROYAL UNION для закупки товаров, а не для продажи услуг.', buyerOnly: '<strong>Только для покупателей товаров.</strong> Форма предназначена для закупок, OEM, контроля качества и консолидации. Предложения услуг не принимаются.', sending: 'Отправляем ваш запрос…', success: 'Спасибо. Ваш запрос на закупку отправлен.', filtered: 'Форма принимает только запросы на закупку товаров. Укажите товар, количество и страну назначения.', error: 'Не удалось отправить запрос. Повторите попытку или используйте WhatsApp.' },
    'zh-CN': { name: '姓名', email: '企业邮箱', whatsapp: 'WhatsApp 号码（选填）', company: '公司名称', market: '主要市场', requestType: '您需要哪类采购服务？', quantity: '预计采购数量', destination: '目的国家', source: '您希望采购什么产品？', confirm: '我联系 ROYAL UNION 是为了采购产品，而不是推销服务。', buyerOnly: '<strong>仅限产品采购买家。</strong> 本表单只接受采购、OEM、验货、供应商管理及集货需求，不接受SEO、建站、营销、招聘或供应商推销。', sending: '正在发送您的需求…', success: '感谢您，您的采购需求已发送。', filtered: '本表单只接受产品采购需求。请填写产品或品类、数量及目的国家。', error: '暂时无法发送需求，请重试或通过 WhatsApp 联系我们。' },
    fr: { name: 'Nom complet', email: 'E-mail professionnel', whatsapp: 'Numéro WhatsApp (facultatif)', company: 'Entreprise', market: 'Marché principal', requestType: 'De quelle aide sourcing avez-vous besoin ?', quantity: 'Quantité de commande prévue', destination: 'Pays de destination', source: 'Quel produit souhaitez-vous acheter ?', confirm: 'Je contacte ROYAL UNION pour acheter des produits, et non pour vendre des services.', buyerOnly: '<strong>Réservé aux acheteurs de produits.</strong> Ce formulaire concerne le sourcing, les achats, l’OEM, le contrôle qualité et la consolidation. Les offres de services ne sont pas acceptées.', sending: 'Envoi de votre demande…', success: 'Merci. Votre demande d’approvisionnement a été envoyée.', filtered: 'Ce formulaire accepte uniquement les demandes d’achat de produits. Indiquez le produit, la quantité et la destination.', error: 'Nous n’avons pas pu envoyer votre demande. Réessayez ou utilisez WhatsApp.' }
  };
  const messages = formCopy[locale] || formCopy.en;

  inquiryForm.querySelectorAll('[data-form-label]').forEach((label) => {
    const key = label.dataset.formLabel;
    const firstTextNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
    if (firstTextNode && messages[key]) firstTextNode.nodeValue = messages[key];
  });
  const confirmationCopy = inquiryForm.querySelector('[data-buyer-confirmation]');
  if (confirmationCopy) confirmationCopy.textContent = messages.confirm;
  const buyerOnlyCopy = inquiryForm.querySelector('[data-buyer-only-note]');
  if (buyerOnlyCopy) buyerOnlyCopy.innerHTML = messages.buyerOnly;

  const spamPatterns = [
    /\bseo(?:\s+services?)?\b/i,
    /search engine optimi[sz]ation/i,
    /link building/i,
    /\bbacklinks?\b/i,
    /guest post/i,
    /domain authority/i,
    /google ranking|rank(?:ing)? (?:your )?(?:site|website).*(?:google|search)/i,
    /first page (?:of )?google/i,
    /web(?:site)? (?:design|development)/i,
    /digital marketing|social media marketing|content marketing/i,
    /pay per click|\bppc services?\b/i,
    /marketing agency|website audit|free audit/i,
    /increase (?:your )?(?:website )?traffic|improve (?:your )?online visibility/i,
    /i noticed your website|dear website owner/i,
    /\b(?:ahrefs|semrush)\b/i
  ];

  inquiryForm.addEventListener('focusin', () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'sourcing_form_start', {
        contact_location: 'homepage_form',
        page_path: window.location.pathname,
        page_language: locale
      });
    }
  }, { once: true });

  const trackBlockedSubmission = (reason) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'invalid_lead_blocked', {
        reason,
        contact_location: 'homepage_form',
        page_path: window.location.pathname
      });
    }
  };

  const showFilteredMessage = (reason) => {
    formStatus.className = 'form-status is-filtered';
    formStatus.textContent = messages.filtered;
    trackBlockedSubmission(reason);
  };

  inquiryForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;

    const payload = Object.fromEntries(new FormData(inquiryForm).entries());
    const honeypot = String(payload._honey || '').trim();
    const buyerText = [payload.name, payload.company, payload.request_type, payload.quantity, payload.destination, payload.message]
      .filter(Boolean)
      .join(' ');

    if (honeypot) {
      formStatus.className = 'form-status is-success';
      formStatus.textContent = messages.success;
      trackBlockedSubmission('honeypot');
      return;
    }
    if (Date.now() - formOpenedAt < minimumCompletionTime) {
      showFilteredMessage('completed_too_fast');
      return;
    }
    if (payload.buyer_status !== 'product_buyer' || spamPatterns.some((pattern) => pattern.test(buyerText))) {
      showFilteredMessage('non_buyer_content');
      return;
    }

    submitButton.disabled = true;
    inquiryForm.dataset.submitting = 'true';
    formStatus.className = 'form-status';
    formStatus.textContent = messages.sending;

    const companyName = String(payload.company || '').replace(/[\r\n|]/g, ' ').slice(0, 80);
    const requestType = String(payload.request_type || '').replace(/[\r\n|]/g, ' ').slice(0, 80);
    payload._subject = `[BUYER INQUIRY] ${requestType} | ${companyName}`;
    payload._template = 'table';
    payload.page_language = locale;

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Form submission failed');

      inquiryForm.reset();
      formOpenedAt = Date.now();
      formStatus.classList.add('is-success');
      formStatus.textContent = messages.success;
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          method: 'web_form',
          contact_location: 'homepage_form',
          page_path: window.location.pathname,
          page_title: document.title
        });
      }
    } catch (error) {
      formStatus.classList.add('is-error');
      formStatus.textContent = messages.error;
    } finally {
      submitButton.disabled = false;
      delete inquiryForm.dataset.submitting;
    }
  });
}
