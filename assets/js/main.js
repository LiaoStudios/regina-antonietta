// Regina Antonietta — interazioni sito

// Header: sfondo al scroll
const header = document.getElementById('main-header');
const onScroll = () => {
  if (window.scrollY > 40) header.classList.add('is-scrolled');
  else header.classList.remove('is-scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Menu mobile
const menuBtn = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('hidden') === false;
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  mobileNav.querySelectorAll('a, button').forEach(el =>
    el.addEventListener('click', () => mobileNav.classList.add('hidden'))
  );
}

// Popup Ordina (chiama o Just Eat) — delegazione eventi: robusta a prescindere
// dai tempi di parsing/caricamento del DOM.
function openOrderModal() {
  const m = document.getElementById('order-modal');
  if (!m) return;
  m.classList.remove('hidden');
  m.classList.add('flex');
  document.body.style.overflow = 'hidden';
}
function closeOrderModal() {
  const m = document.getElementById('order-modal');
  if (!m) return;
  m.classList.add('hidden');
  m.classList.remove('flex');
  document.body.style.overflow = '';
}
document.addEventListener('click', (e) => {
  if (e.target.closest('.js-order-btn')) { openOrderModal(); return; }
  if (e.target.closest('#order-modal-close') || e.target.id === 'order-modal-backdrop') closeOrderModal();
});
document.addEventListener('keydown', (e) => {
  const m = document.getElementById('order-modal');
  if (e.key === 'Escape' && m && !m.classList.contains('hidden')) closeOrderModal();
});

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Filtro categorie menù
const catButtons = document.querySelectorAll('.cat-btn');
const menuItems = document.querySelectorAll('[data-cat]');
catButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.filter;
    catButtons.forEach(b => b.classList.toggle('is-active', b === btn));
    menuItems.forEach(item => {
      const show = cat === 'all' || item.dataset.cat === cat;
      item.style.display = show ? '' : 'none';
    });
  });
});
