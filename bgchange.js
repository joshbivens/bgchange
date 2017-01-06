const body = document.querySelector('body');
const container = document.querySelector('.container');

window.addEventListener('scroll', changeOnScroll);

function changeOnScroll() {
  container.style.opacity = (body.scrollTop * 0.001);
}
