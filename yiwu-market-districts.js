document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const floorPositions = ['73%', '55%', '37%', '18%'];
  document.querySelectorAll('.districts .district-section').forEach((section) => {
    const map = section.querySelector('.district-map');
    const floors = Array.from(section.querySelectorAll('.floor-list > div'));
    if (!map || !floors.length) return;
    section.classList.add('is-dynamic');
    const label = document.createElement('div');
    label.className = 'map-active-label';
    label.setAttribute('aria-live', 'polite');
    map.append(label);
    let activeFloor = 0;
    let autoplay;
    const selectFloor = (index) => {
      activeFloor = (index + floors.length) % floors.length;
      const floor = floors[activeFloor];
      floors.forEach((item, itemIndex) => {
        const selected = itemIndex === activeFloor;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      section.style.setProperty('--floor-position', floorPositions[activeFloor] || '50%');
      label.textContent = `${floor.querySelector('b')?.textContent || ''} · ${floor.querySelector('span')?.textContent || ''}`;
    };
    const stopAutoplay = () => window.clearInterval(autoplay);
    const startAutoplay = () => {
      stopAutoplay();
      if (!reduceMotion.matches) autoplay = window.setInterval(() => selectFloor(activeFloor + 1), 3600);
    };
    floors.forEach((floor, index) => {
      floor.setAttribute('role', 'button');
      floor.setAttribute('tabindex', '0');
      floor.setAttribute('aria-label', `Highlight ${floor.querySelector('b')?.textContent || `floor ${index + 1}`}`);
      floor.addEventListener('click', () => { selectFloor(index); startAutoplay(); });
      floor.addEventListener('mouseenter', () => { selectFloor(index); stopAutoplay(); });
      floor.addEventListener('mouseleave', startAutoplay);
      floor.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectFloor(index); startAutoplay(); }
        if (event.key === 'ArrowDown') { event.preventDefault(); floors[(index + 1) % floors.length].focus(); }
        if (event.key === 'ArrowUp') { event.preventDefault(); floors[(index - 1 + floors.length) % floors.length].focus(); }
      });
    });
    map.addEventListener('click', () => { selectFloor(activeFloor + 1); startAutoplay(); });
    section.addEventListener('mouseenter', stopAutoplay);
    section.addEventListener('mouseleave', startAutoplay);
    selectFloor(0);
    if (reduceMotion.matches) { section.classList.add('is-active'); return; }
    const activate = () => { section.classList.add('is-active'); startAutoplay(); };
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { activate(); observer.disconnect(); } }, { threshold: 0.28 });
      observer.observe(section);
    } else activate();
  });
});
