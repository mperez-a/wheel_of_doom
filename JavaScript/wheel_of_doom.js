var restartButton = document.getElementById("restart-button");

restartButton.addEventListener("click", function() {
  window.location.href = "/index.html"; 
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15,
    strech: 0,
    depth: 700,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});

var startButton = document.getElementById("start-button");
var swiper = document.querySelector(".mySwiper").swiper;

//var coders = ["Coder1", "Coder2", "Coder3", "Coder4"]; se deberia sacar y enlazar con la lista ya hecha de coders?
// Agregar evento de clic al botón "kill"
startButton.addEventListener("click", function () {
  // Deshabilitar el botón mientras se realiza la rotación
  startButton.disabled = true;

  var totalTime = 2500;
  // Obtener el intervalo de tiempo para avanzar al siguiente slide
  var slideInterval = 400; // 200 milisegundos
  // Calcular el número total de slides en el swiper
  var totalSlides = swiper.slides.length;

  var audio = new Audio("/sound/Sonido.mp3");
  audio.play();

  // Iniciar la rotación del slider
  var rotationTimer = setInterval(function () {
    
    // Avanzar al siguiente slide
    swiper.slideNext();

    // Actualizar la duración restante
    totalTime -= slideInterval;

    // Verificar si se ha alcanzado el límite de tiempo
    if (totalTime <= 0) {
      // Detener la rotación
      clearInterval(rotationTimer);

      // Seleccionar un nombre aleatorio de la lista
      var randomIndex = Math.floor(Math.random() * names.length);
      var selectedCoder = names[randomIndex];


      // Mostrar el nombre seleccionado en la consola
      console.log("Selected coder:", selectedCoder);

      var ripImage = document.createElement("img");
      ripImage.src = "/img/rip-card.png";
      ripImage.alt = "RIP";

      // Obtener el contenedor para la imagen de "rip"
      var ripContainer = document.getElementById("rip-container");

      // Vaciar el contenedor (en caso de que ya contenga elementos anteriores)
      ripContainer.innerHTML = "";

      // Agregar el nombre seleccionado y la imagen de "rip" al contenedor
      var nameElement = document.createElement("span");
      nameElement.classList.add("rip-name");
      nameElement.textContent = selectedCoder;
      ripContainer.appendChild(nameElement);
      ripContainer.appendChild(ripImage);


      // Eliminar el nombre seleccionado de la lista
      names.splice(randomIndex, 1);

      if (names.length === 1) {
        // Reproducir el sonido de felicitación
        explocion.pause();//agregar sonido de bomba y risa para que no se reproduzca
        var congratulationSound = new Audio("/sound/winner.mp3");
        var popup = document.getElementById("popup");
        var popupMessage = document.getElementById("popup-message");
        var closeButton = document.getElementById("close-popup");
        congratulationSound.play();
        popupMessage.textContent = "¡Felicidades! " + names[0] + " Has ganado el juego.";
        
        // Mostrar el popup
        popup.style.display = "flex";
        startButton.disabled = true;

        function hidePopupMessage() {
            var popup = document.getElementById("popup");
            popup.style.display = "none";
          }

        closeButton.addEventListener("click", hidePopupMessage);
        return;
      }

      setTimeout(function () {
        swiper.slideTo(0); // Regresar al primer slide
        ripContainer.innerHTML = ""; // Vaciar el contenedor de la imagen de "rip"
        startButton.disabled = false; // Habilitar el botón
      }, 3000); // Esperar 3 segundos antes de reiniciar el juego
      
    }
  }, slideInterval);
});
