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
      const response = await fetch('https://formsubmit.co/ajax/sales5@royalunion.com.cn', {
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
