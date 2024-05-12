document.querySelector('.background-image').addEventListener('click', function () {
  window.location.href = 'inicio.html';
});


document.querySelector('.logo-cell').addEventListener('click', function () {
  window.location.href = 'inicio.html';
});


window.addEventListener('resize', function () {
  var map = document.getElementById('google-map');

  if (map) {
    if (window.innerWidth <= 600) {
      map.width = "300";
      map.height = "200";
    } else {
      map.width = "600";
      map.height = "450";
    }
  }

});


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("botonvacunacion").onclick = function () {
    var element = document.getElementById("planvacunacion");
    var bodyRect = document.body.getBoundingClientRect();
    var elementRect = element.getBoundingClientRect();
    var offset = elementRect.top - bodyRect.top;
    window.scrollTo(0, offset - 115);

  };
  document.getElementById("botondesparasitacion").onclick = function () {
    var element = document.getElementById("plandesparasitacion");
    var bodyRect = document.body.getBoundingClientRect();
    var elementRect = element.getBoundingClientRect();
    var offset = elementRect.top - bodyRect.top;
    window.scrollTo(0, offset - 115);
  };
  document.getElementById("botonmicrochip").onclick = function () {
    var element = document.getElementById("microchip");
    var bodyRect = document.body.getBoundingClientRect();
    var elementRect = element.getBoundingClientRect();
    var offset = elementRect.top - bodyRect.top;
    window.scrollTo(0, offset - 115);
  };
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("botonpeluqueria").onclick = function () {
    var element = document.getElementById("peluqueria");
    var bodyRect = document.body.getBoundingClientRect();
    var elementRect = element.getBoundingClientRect();
    var offset = elementRect.top - bodyRect.top;
    window.scrollTo(0, offset - 115);
  };
  document.getElementById("botoncorteu").onclick = function () {
    var element = document.getElementById("cortezarpas");
    var bodyRect = document.body.getBoundingClientRect();
    var elementRect = element.getBoundingClientRect();
    var offset = elementRect.top - bodyRect.top;
    window.scrollTo(0, offset - 115);
  };
  document.getElementById("botoneutanasia").onclick = function () {
    var element = document.getElementById("eutanasia");
    var bodyRect = document.body.getBoundingClientRect();
    var elementRect = element.getBoundingClientRect();
    var offset = elementRect.top - bodyRect.top;
    window.scrollTo(0, offset - 115);
  };
  document.getElementById("botonodontologia").onclick = function () {
    var element = document.getElementById("odontologia");
    var bodyRect = document.body.getBoundingClientRect();
    var elementRect = element.getBoundingClientRect();
    var offset = elementRect.top - bodyRect.top;
    window.scrollTo(0, offset - 115);
  };
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("botonmedicina").onclick = function () {
    var element = document.getElementById("medicinapreventiva");
    var bodyRect = document.body.getBoundingClientRect();
    var elementRect = element.getBoundingClientRect();
    var offset = elementRect.top - bodyRect.top;
    window.scrollTo(0, offset - 115);
  };
  document.getElementById("botonurgencias").onclick = function () {
    var element = document.getElementById("urgencias");
    var bodyRect = document.body.getBoundingClientRect();
    var elementRect = element.getBoundingClientRect();
    var offset = elementRect.top - bodyRect.top;
    window.scrollTo(0, offset - 115);
  };
  document.getElementById("botoncastracion").onclick = function () {
    var element = document.getElementById("castracion");
    var bodyRect = document.body.getBoundingClientRect();
    var elementRect = element.getBoundingClientRect();
    var offset = elementRect.top - bodyRect.top;
    window.scrollTo(0, offset - 115);
  };
});


document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el elemento de video
  var video = document.querySelector('#videopeluqueria');

  if (video) {
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
  }

});