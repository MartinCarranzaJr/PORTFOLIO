// Animacion on scroll
AOS.init({
    offset: 50, // Cambia este valor a lo que necesites
    delay: 0,
    duration: 400,
    easing: 'ease'
  });
  
  
$(document).ready(function() {
    // Escuchar el evento click en el botón de menú
    $('.menu-toggle').on('click', function() {
        // Al hacer clic, alternar la clase 'active' en la lista de navegación
        $('nav ul').toggleClass('active');
    });
});