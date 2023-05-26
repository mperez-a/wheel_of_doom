// Constantes para los nombres de los elementos del DOM
const ELEMENTS = {
	CODER_LIST: document.getElementById("coders-list"),
	CODER_INPUT: document.getElementById("coder-name"),
	ERROR_MESSAGE: document.getElementById("error-message"),
	ERROR_TEXT: document.getElementById("error-text"),
	ERROR_BUTTON: document.getElementById("error-button"),
	ADD_BUTTON: document.getElementById("add-btn"),
	DELETE_BUTTON: document.getElementById("delete-btn"),
	START_BUTTON: document.getElementById("start-btn")
};

let codersList = localStorage.getItem('codersList');
codersList = codersList ? JSON.parse(codersList) : [];

function displayList() {
	ELEMENTS.CODER_LIST.innerHTML = "";

	codersList.forEach(element => {
	const li = document.createElement("li");
	li.textContent = element;
	ELEMENTS.CODER_LIST.appendChild(li);
});
}

function addCoder() {
	const coderName = ELEMENTS.CODER_INPUT.value.trim().toLocaleLowerCase();

	if (coderName) {
	codersList.unshift(coderName);
	localStorage.setItem('codersList', JSON.stringify(codersList));
	ELEMENTS.CODER_INPUT.value = "";
	displayList();
	console.log(codersList);
	}
}

function deleteCoder() {
	const coderName = ELEMENTS.CODER_INPUT.value.trim().toLocaleLowerCase();

	const index = codersList.indexOf(coderName);
	if (index !== -1) {
	codersList.splice(index, 1);
	localStorage.setItem('codersList', JSON.stringify(codersList));
	ELEMENTS.CODER_INPUT.value = "";
	displayList();
	console.log(codersList);
	}
}

function start() {
	try {
		if (codersList.length > 0) {
			window.location.href = "../HTML/wheel_of_doom.html";
		} else {
			throw new Error("The coders list is empty.");
		}
	} catch (error) {
		displayErrorMessage(error.message);
	}
}

function displayErrorMessage(message) {
	ELEMENTS.ERROR_TEXT.textContent = message;
	ELEMENTS.ERROR_MESSAGE.classList.add("active");

	ELEMENTS.ERROR_BUTTON.addEventListener("click", hideErrorMessage);
}

function hideErrorMessage() {
	ELEMENTS.ERROR_MESSAGE.style.display = "none";
}

ELEMENTS.ADD_BUTTON.addEventListener("click", addCoder);
ELEMENTS.DELETE_BUTTON.addEventListener("click", deleteCoder);
ELEMENTS.START_BUTTON.addEventListener("click", start);

window.addEventListener("beforeunload", function() {
	this.localStorage.removeItem("codersList");
});

displayList();