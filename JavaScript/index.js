let codersList = localStorage.getItem('names');
codersList = codersList ? JSON.parse(names) : [];

function displayList() {
	const coder_list = document.getElementById("coders-list");
	coder_list.innerHTML = "";

	codersList.forEach(element => {
		const li = document.createElement("li");
		li.textContent = element;
		coder_list.appendChild(li);
	});
}

function addCoder() {
	const coderInput = document.getElementById("coder-name");
	const coderName = coderInput.value.trim().toLowerCase();

	if (coderName) {
		codersList.unshift(coderName);
		localStorage.setItem('codersList', JSON.stringify(codersList));
		coderInput.value = "";
	}
	displayList();
}

function deleteCoder() {
	const coderInput = document.getElementById("coder-name");
	const coderName = coderInput.value.trim().toLowerCase();

	const index = codersList.indexOf(coderName);
	if (index !== -1) {
		codersList.splice(index, 1);
		localStorage.removeItem('coderName', JSON.stringify(codersList));
		coderInput.value = "";
	}
	displayList();
}

function start() {
	try {
		if (codersList && codersList.length > 0) {
			window.location.href = "../HTML/wheel_of_doom.html";
		} else {
			throw new Error("The coders list is empty.");
		}
	} catch (error) {
		displayErrorMessage(error.message);
	}
}

function displayErrorMessage(message) {
	const errorMessageElement = document.getElementById("error-message");
	const errorTextElement = document.getElementById("error-text");

	errorTextElement.textContent = message;
	errorMessageElement.classList.add("active");

	const errorButton = document.getElementById("error-button");
	errorButton.addEventListener("click", hideErrorMessage);
}

function hideErrorMessage() {
	const errorMessageElement = document.getElementById("error-message");
	errorMessageElement.style.display = "none";
}

document.getElementById("add-btn").addEventListener("click", addCoder);
document.getElementById("delete-btn").addEventListener("click", deleteCoder);
document.getElementById("start-btn").addEventListener("click", start);

displayList();