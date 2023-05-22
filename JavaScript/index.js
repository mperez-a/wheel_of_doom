let codersList = [
	"Florencia",
	"Laura",
	"Denis",
	"Jacinemy",
	"Yana",
	"Monica",
	"Rosa P",
	"Manuela",
	"Rosmery",
	"Lucia",
	"Rosa R",
	"Lorena",
	"Cindy",
	"Leandra",
	"Valentina",
	"Marga",
	"Neema",
	"Genesis",
	"Gigi",
	"Milena",
	"Rafaela",
	"Sylvia",
	"Teresa",
	"Zoraida"];

function displayList() {
	const coders_list = document.getElementById("coders-list");
	coders_list.innerHTML = "";

	codersList.forEach(element => {
		const li = document.createElement("li");
		li.textContent = element;
		coders_list.appendChild(li);
	});
}

function addCoder() {
	const coderInput = document.getElementById("coder-name");
	const coder = coderInput.value.trim();

	if (coder !== "") {
		codersList.push(coder);
		coderInput.value = "";
		displayList();
	}
}

function deleteCoder() {
	const coderInput = document.getElementById("coder-name");
	const coder = coderInput.value.trim();

	const index = codersList.indexOf(coder);
	if(index !== -1) {
		codersList.splice(index, 1);
		coderInput.value = "";
		displayList();
	}
}

document.getElementById("add-btn").addEventListener("click", addCoder);
document.getElementById("delete-btn").addEventListener("click", deleteCoder);

displayList();