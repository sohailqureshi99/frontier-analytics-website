document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formNote').textContent =
    'The form design is ready. We will connect it to your business email before launch.';
});
