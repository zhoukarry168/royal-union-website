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
document.querySelector('#legacy-inquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = `Sourcing plan request — ${form.get('company') || form.get('name')}`;
  const body = [
    `Name: ${form.get('name')}`,
    `Email: ${form.get('email')}`,
    `Company: ${form.get('company') || 'Not provided'}`,
    `Primary market: ${form.get('market')}`,
    '',
    'Sourcing request:',
    form.get('message')
  ].join('\n');
  window.location.href = `mailto:sales5@royalunion.com.cn?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
const inquiryForm = document.querySelector('#inquiry-form');

if (inquiryForm) {
  const formEndpoint = 'https://formsubmit.co/ajax/sales5@royalunion.com.cn';
  inquiryForm.action = formEndpoint;
  inquiryForm.method = 'post';
  const submitButton = inquiryForm.querySelector('button[type="submit"]');
  const formStatus = document.createElement('p');
  formStatus.className = 'form-status';
  formStatus.setAttribute('role', 'status');
  formStatus.setAttribute('aria-live', 'polite');
  inquiryForm.append(formStatus);

  const locale = document.documentElement.lang;
  const formMessages = {
    en: { sending: 'Sending your request…', success: 'Thank you. Your sourcing request has been sent.', error: 'We could not send your request. Please contact us on WhatsApp or email sales5@royalunion.com.cn.' },
    es: { sending: 'Enviando su solicitud…', success: 'Gracias. Su solicitud de abastecimiento se ha enviado.', error: 'No hemos podido enviar su solicitud. Contáctenos por WhatsApp o en sales5@royalunion.com.cn.' },
    'pt-BR': { sending: 'Enviando sua solicitação…', success: 'Obrigado. Sua solicitação de sourcing foi enviada.', error: 'Não foi possível enviar sua solicitação. Fale conosco pelo WhatsApp ou por sales5@royalunion.com.cn.' },
    ru: { sending: 'Отправляем ваш запрос…', success: 'Спасибо. Ваш запрос на закупку отправлен.', error: 'Не удалось отправить запрос. Свяжитесь с нами в WhatsApp или по адресу sales5@royalunion.com.cn.' },
    'zh-CN': { sending: '正在发送您的需求…', success: '感谢您，您的采购需求已发送。', error: '暂时无法发送需求，请通过 WhatsApp 或 sales5@royalunion.com.cn 联系我们。' },
    fr: { sending: 'Envoi de votre demande…', success: 'Merci. Votre demande d’approvisionnement a été envoyée.', error: 'Nous n’avons pas pu envoyer votre demande. Contactez-nous sur WhatsApp ou à sales5@royalunion.com.cn.' }
  };
  const messages = formMessages[locale] || formMessages.en;

  inquiryForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;

    submitButton.disabled = true;
    formStatus.className = 'form-status';
    formStatus.textContent = messages.sending;

    const payload = Object.fromEntries(new FormData(inquiryForm).entries());
    payload._subject = 'New sourcing plan request | ROYAL UNION';
    payload._template = 'table';
    payload._honey = '';

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Form submission failed');

      inquiryForm.reset();
      formStatus.classList.add('is-success');
      formStatus.textContent = messages.success;
    } catch (error) {
      formStatus.classList.add('is-error');
      formStatus.textContent = messages.error;
    } finally {
      submitButton.disabled = false;
    }
  });
}
