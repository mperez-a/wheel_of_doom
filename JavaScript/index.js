let codersList = localStorage.getItem("codersList");
codersList = codersList ? JSON.parse(codersList) : [];

let errorMessageElement = null;

const codersListElement = document.getElementById("coders-list");
const addBtn = document.getElementById("add-btn");
const startBtn = document.getElementById("start-btn");
const coderName = document.getElementById("coder-name");

function addCoder() {
  let name = coderName.value;
  name = name.trim().toLowerCase();

  if (name) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    li.className = "coderName";
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = "x";
    li.innerHTML = name;
    codersListElement.appendChild(li);
    li.appendChild(deleteBtn);
    codersList.unshift(name);
    localStorage.setItem("codersList", JSON.stringify(codersList));
    coderName.value = "";
  }
}

function deleteCoder(event) {
  if (event.target.classList.contains("delete")) {
    const li = event.target.parentElement;
    const name = li.textContent.trim().toLowerCase();
    let correctName = name.slice(0, name.length - 1);
    const index = codersList.indexOf(correctName);
    if (index !== -1) {
      codersList.splice(index, 1);
      localStorage.setItem("codersList", JSON.stringify(codersList));
      codersListElement.removeChild(li);
    }
  }
}

function start() {
  try {
    if (codersList.length > 1) {
      localStorage.setItem("codersListWheel", JSON.stringify(codersList));
      window.location.href = "../HTML/wheel_of_doom.html";
    } else {
      throw new Error("The coders list must have at least 2 names.");
    }
  } catch (error) {
    displayErrorMessage(error.message);
  }
}

function displayErrorMessage(message) {
  if (!errorMessageElement) {
    errorMessageElement = document.getElementById("error-message");
    const errorButton = document.getElementById("error-button");
    errorButton.addEventListener("click", hideErrorMessage);
  }

  const errorTextElement = document.getElementById("error-text");
  errorTextElement.textContent = message;
  errorMessageElement.classList.add("active");
}

function hideErrorMessage() {
  errorMessageElement.classList.remove("active");
}

function clearLocalStorageOnUnload(event) {
  const isReload = event.currentTarget.performance.navigation.type === 1;
  if (isReload) {
    localStorage.removeItem("codersList");
  }
}

addBtn.addEventListener("click", addCoder);
codersListElement.addEventListener("click", deleteCoder);
startBtn.addEventListener("click", start);
window.addEventListener("beforeunload", clearLocalStorageOnUnload);
