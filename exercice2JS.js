const userInput = prompt("Enter something:");
let trimedText = userInput.trim("-");
let upperCaseText = userInput.toUpperCase();
console.log(upperCaseText);

let finalText = upperCaseText.replace("-", " ");

console.log(finalText);
