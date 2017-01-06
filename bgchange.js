const body = document.querySelector('body');
const container = document.querySelector('.container');

window.addEventListener('scroll', changeOnScroll);
console.log(window.innerHeight);

function changeOnScroll() {
  let scrollBottom = -body.scrollTop + window.innerHeight;
  container.style.opacity = `${scrollBottom * 0.001}`;
}

