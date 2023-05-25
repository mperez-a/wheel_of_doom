const storedCodersList = localStorage.getItem('codersList');
let names = storedCodersList ? JSON.parse(storedCodersList) : [];

console.log(names);