// Detectar el scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
// Animacion on scroll
AOS.init({
    offset: 50, // Cambia este valor a lo que necesites
    delay: 0,
    duration: 400,
    easing: 'ease'
  });
  