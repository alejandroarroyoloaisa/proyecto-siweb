document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector('.navbar');
  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".off-screen-menu");
  const topSection = document.querySelector(".top-section");
  const backgroundImage = topSection.querySelector(".background-image");
  const contactButton = document.querySelector('.contact-button');
  const phoneIcon = document.querySelector('.phone-icon');
  const addressIcon = document.querySelector('.address-icon');

  // Establece la imagen de fondo una vez al principio
  backgroundImage.style.backgroundImage = 'url("images/logo_2.png")';

  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > navbar.offsetHeight) {
      hamMenu.classList.add('.show-ham-menu');
      backgroundImage.style.display = 'block';
      if (window.innerWidth >= 950) {
        backgroundImage.classList.remove('fade-out');
        backgroundImage.classList.add('fade-in');
        backgroundImage.style.backgroundImage = 'url("images/logo_2.png")';

      }

    } else {
      // Si el menú de hamburguesa está abierto y la ventana es más grande que 600px
      if (hamMenu.classList.contains('active') && window.innerWidth >= 600) {
        // Cierra el menú de hamburguesa
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
        hamMenu.classList.remove('.show-ham-menu');
      }

      backgroundImage.style.display = 'none';

    }
    controlVisibility();


    if (window.scrollY > navbar.offsetHeight) {
      hamMenu.style.display = 'block';
    } else if (window.innerWidth < 600) {
      hamMenu.style.display = 'block';
    } else {
      hamMenu.style.display = 'none';
      hamMenu.classList.remove('active');
      offScreenMenu.classList.remove('active');
      hamMenu.classList.remove('.show-ham-menu');
    }
  });

  window.addEventListener('resize', function () {
    if (window.scrollY > navbar.offsetHeight) {

      backgroundImage.style.display = 'block';
      if (window.innerWidth >= 950) {
        backgroundImage.classList.remove('fade-out');
        backgroundImage.classList.add('fade-in');
        backgroundImage.style.backgroundImage = 'url("images/logo_2.png")';

      }

    } else {
      backgroundImage.style.display = 'none';

    }
    controlVisibility();

    if (window.innerWidth < 600) {

      hamMenu.style.display = 'block';
    } else if (hamMenu.classList.contains('active') && window.scrollY < navbar.offsetHeight) {
      hamMenu.style.display = 'none';
      hamMenu.classList.remove('active');
      offScreenMenu.classList.remove('active');
      hamMenu.classList.remove('.show-ham-menu');
    } else if (window.scrollY < navbar.offsetHeight) {
      hamMenu.style.display = 'none';
      hamMenu.classList.remove('active');
      offScreenMenu.classList.remove('active');
      hamMenu.classList.remove('.show-ham-menu');
    }
  });

  function controlVisibility() {
    if (window.scrollY > navbar.offsetHeight && window.innerWidth < 700) {
      if (contactButton) contactButton.classList.add('fade-out');
      if (phoneIcon) phoneIcon.classList.add('fade-out');
      if (addressIcon) addressIcon.classList.add('fade-out');
    } else {
      if (contactButton) contactButton.classList.remove('fade-out');
      if (phoneIcon) phoneIcon.classList.remove('fade-out');
      if (addressIcon) addressIcon.classList.remove('fade-out');
    }
  }

});