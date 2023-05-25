const storedCodersList = localStorage.getItem('codersList');
let names = storedCodersList ? JSON.parse(storedCodersList) : [];

console.log(names);

var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides:true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate:15,
		strech:0,
		depth:500,
		modifier:1,
		slideShadows: true,
	},
	loop:true,
})