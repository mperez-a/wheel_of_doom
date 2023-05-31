const storedCodersList = localStorage.getItem("codersList");
let names = storedCodersList ? JSON.parse(storedCodersList) : [];

console.log(names);

let restartButton = document.getElementById("restart-button");
let spinner = new Audio("/sound/spinner.mp3");
let explotion = new Audio("/sound/explotion.mp3");
let laught = new Audio("/sound/laught.mp3");

function restartGame() {
  window.location.href = "/index.html";
  localStorage.removeItem("codersList");
}

restartButton.addEventListener("click", restartGame);

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

let startButton = document.getElementById("start-button");
var swiper = document.querySelector(".mySwiper").swiper;

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.disabled = true;

  let totalTime = 2500;
  let slideInterval = 400;
  let totalSlides = swiper.slides.length;

  spinner.play();

  let rotationTimer = setInterval(function () {
    swiper.slideNext();
    totalTime -= slideInterval;

    if (totalTime <= 0) {
      clearInterval(rotationTimer);
      let randomIndex = Math.floor(Math.random() * names.length);
      let selectedCoder = names[randomIndex];

      console.log(selectedCoder);

      showRipCard(selectedCoder, randomIndex);
      
      if (names.length === 1) {
        congratulation();
        return;
      }

      setTimeout(function () {
        resetGame();
        
      }, 3000);
    }
  }, slideInterval);
}

function showRipCard(selectedCoder, randomIndex) {
  let ripImage = document.createElement("img");
  ripImage.src = "/img/rip-card.png";
  ripImage.alt = "RIP";

  let ripContainer = document.getElementById("rip-container");
  ripContainer.innerHTML = "";

  let nameElement = document.createElement("span");
  nameElement.classList.add("rip-name");
  nameElement.textContent = selectedCoder;
  ripContainer.appendChild(nameElement);
  ripContainer.appendChild(ripImage);

  spinner.play();
  explotion.play();
  laught.play();

  names.splice(randomIndex, 1);

}

function congratulation() {
  explotion.pause();
  laught.pause();
  var congratulationSound = new Audio("/sound/winner.mp3");
  var popup = document.getElementById("popup");
  var popupMessage = document.getElementById("popup-message");
  var closeButton = document.getElementById("close-popup");

  congratulationSound.play();
  popupMessage.textContent = "Congrats! " + names[0] + " yu won the game.";
  popup.style.display = "flex";
  startButton.disabled = true;

  closeButton.addEventListener("click", hidePopupMessage);
}

function resetGame() {
  swiper.slideTo(0);
  let ripContainer = document.getElementById("rip-container");
  ripContainer.innerHTML = "";
  startButton.disabled = false;
}

function hidePopupMessage() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}