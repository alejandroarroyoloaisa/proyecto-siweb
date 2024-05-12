window.addEventListener('resize', function () {
  var gridContainer = document.querySelector('.grid-container2');
  var img = document.querySelector('#imgpeluqueria');

  if (window.innerWidth < 1000) {
    document.getElementById('img1').src = 'images/banner-perros-inicio-responsive.jpg';
    document.getElementById('img2').src = 'images/banner-gatos-inicio-responsive.jpg';
    document.getElementById('img3').src = 'images/banner-exoticos-inicio-responsive.jpg';
    gridContainer.classList.add('responsive');
  } else {
    document.getElementById('img1').src = 'images/banner-perros-inicio.jpg';
    document.getElementById('img2').src = 'images/banner-gatos-inicio.jpg';
    document.getElementById('img3').src = 'images/banner-exoticos-inicio.jpg';
    gridContainer.classList.remove('responsive');
  }

  if (window.innerWidth < 750) {
    img.src = 'images/banner-peluqueria-canina-responsive.jpg';
  } else {
    img.src = 'images/banner-peluqueria-canina.jpg';
  }
});

window.addEventListener('scroll', function () {
  const parallaxVideo = document.querySelector('.parallax-video');
  let scrollPosition = window.pageYOffset;

  parallaxVideo.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});


document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el elemento de video
  var video = document.querySelector('#videoinicio');


  video.style.objectFit = 'cover';

  // Agrega un event listener de 'scroll' al objeto window
  window.addEventListener('scroll', function () {
    // Si se ha desplazado hacia abajo en la página
    if (window.scrollY > 0) {
      // Reduce el alto del video a un valor específico y aplica una transición
      video.style.transition = 'height 0.5s ease-in-out';
      video.style.height = '40vh';
    } else {
      // Devuelve el video a su alto original y aplica una transición
      video.style.transition = 'height 0.5s ease-in-out';
      video.style.height = '100vh';
    }
  });
});
