  document.addEventListener('DOMContentLoaded', function() {
    const myCarousel = new bootstrap.Carousel(document.getElementById('blogCarousel'), {
      interval: 6000, // 6 segundos
      wrap: true
    });
  });
