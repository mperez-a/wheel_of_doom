let codersList = [
	"Florencia",
	"Laura",
	"Denis",
	"Jacinemy",
	"Yana",
	"Monica",
	"Rosa",
	"Manuela",
	"Rosmery",
	"Lucia",
	"Rosa",
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
	"Zoraida"
];

codersList.forEach((coderName, index) => {
	codersList[index] = coderName.toLowerCase();
});
console.log(codersList);

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
	const coder = coderInput.value.trim().toLowerCase();

	if (coder !== "") {
		codersList.unshift(coder);
		coderInput.value = "";
		displayList();
	}
	console.log(codersList);
}

function deleteCoder() {
	const coderInput = document.getElementById("coder-name");
	const coder = coderInput.value.trim().toLowerCase();

	const index = codersList.indexOf(coder);
	if(index !== -1) {
		codersList.splice(index, 1);
		coderInput.value = "";
		displayList();
	}
	console.log(codersList);
}

document.getElementById("add-btn").addEventListener("click", addCoder);
document.getElementById("delete-btn").addEventListener("click", deleteCoder);

displayList();