export function initBackToTop() {
  const topBtn = document.getElementById('backToTopBtn');
  if (!topBtn) return;
  function checkScroll() {
    if (window.scrollY > 300) {
      topBtn.style.display = 'inline-block';
    } else {
      topBtn.style.display = 'none';
    }
  }
  window.addEventListener('scroll', checkScroll);
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  checkScroll();
}