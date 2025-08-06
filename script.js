// Scroll-triggered slide-up animation
const slideElements = document.querySelectorAll('.slide-up');

const inView = (el, offset = 0.75) => {
  const top = el.getBoundingClientRect().top;
  return top <= window.innerHeight * offset;
};

function checkSlide() {
  slideElements.forEach(el => {
    if (inView(el)) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    }
  });
}

window.addEventListener('scroll', checkSlide);
window.addEventListener('load', checkSlide);
