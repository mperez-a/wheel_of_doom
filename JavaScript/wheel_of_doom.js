const storedCodersList = localStorage.getItem("codersList");
let names = storedCodersList ? JSON.parse(storedCodersList) : [];

console.log(names);

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

// Obtener el botón y el slider
var startButton = document.getElementById("start-button");
var swiper = document.querySelector(".mySwiper").swiper;

//var coders = ["Coder1", "Coder2", "Coder3", "Coder4"]; se deberia sacar y enlazar con la lista ya hecha de coders?
// Agregar evento de clic al botón "kill"
startButton.addEventListener("click", function () {
  // Deshabilitar el botón mientras se realiza la rotación
  startButton.disabled = true;

  
  var totalTime = 5000;
  // Obtener el intervalo de tiempo para avanzar al siguiente slide
  var slideInterval = 400; // 200 milisegundos
  // Calcular el número total de slides en el swiper
  var totalSlides = swiper.slides.length;

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
      ripContainer.appendChild(document.createTextNode(selectedCoder));
      ripContainer.appendChild(ripImage);

      // Eliminar el nombre seleccionado de la lista
      names.splice(randomIndex, 1);

      // Habilitar el botón nuevamente
      startButton.disabled = false;
    }
  }, slideInterval);
});
function canRestartGame() {
    return coders.length > 0;
  }
  
  // Llamar a la función "canRestartGame" para verificar si se puede volver a jugar
  if (canRestartGame()) {
    // Puedes volver a jugar
    restartGame();
  } else {
    // No hay nombres disponibles para jugar
    console.log("No hay más nombres disponibles para jugar.");
  }

  //animacion de fantasma
  var ripCard = document.querySelector("rip-container");
  ripCard.classList.add("ghost-animation");
  ghostImage.style.display = "block";

  var restartButton = document.getElementById("restart-button");

  restartButton.addEventListener("click", function() {

  window.location.href = "/index.html";
});