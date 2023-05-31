let codersList = [];

const codersListElement = document.getElementById('coders-list');
const addBtn = document.getElementById('add-btn');
const startBtn = document.getElementById('start-btn');

const coderName = document.getElementById('coder-name');

function addCoder() {
	let name = coderName.value;
	name = name.trim().toLowerCase();

	if (name) {
		const li = document.createElement('li');
		const deleteBtn = document.createElement('button');
		li.className = 'coderName';
		deleteBtn.className = 'delete';
		deleteBtn.innerHTML = "x";
		li.innerHTML = name;
		codersListElement.appendChild(li);
		li.appendChild(deleteBtn);
		codersList.unshift(name);
		coderName.value = "";
	}
	console.log(codersList);
}

function deleteCoder(event) {
	if (event.target.classList.contains('delete')) {
		const li = event.target.parentElement;
		const name = li.textContent.trim().toLowerCase();
		let correctName = name.slice(0, name.length - 1);
		console.log(correctName);
		const index = codersList.indexOf(correctName);
		codersList.splice(index, 1);
		codersListElement.removeChild(li);
		console.log(codersList);
	}
}

function start() {
	if (codersList.length > 1) {
		window.location.href = "./html/wheel_of_doom.html";
	}
}

addBtn.addEventListener('click', addCoder);
codersListElement.addEventListener('click', deleteCoder);
startBtn.addEventListener('click', start);
