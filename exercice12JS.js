const givenString = "javascript-is-fun";

let result = givenString
  .split("")
  .map((element) => element.replace("-", " "))
  .join("")
  .split(" ")
  .map((element) => element[0].toUpperCase() + element.slice(1))
  .join(" ");

console.log(result);
