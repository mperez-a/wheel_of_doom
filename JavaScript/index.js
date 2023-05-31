document.querySelectorAll('.drumkit-container button').forEach(button => {
	button.addEventListener('click', () => {
		const soundId = button.id;
		const sound = new Audio(`../sound/${soundId}.wav`);
		sound.play();
	});
});

const hamburger_menu = document.querySelector(".hamburger-menu");
const nav_menu = document.querySelector(".nav-bar");

hamburger_menu.addEventListener('click', () => {
	hamburger_menu.classList.toggle("active");
	nav_menu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
	hamburger_menu.classList.remove("active");
	nav_menu.classList.remove("active");
}));