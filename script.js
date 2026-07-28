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
document.querySelector('#inquiry-form').addEventListener('submit', (event) => {
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
