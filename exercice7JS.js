const sentence = "Method chaining makes code cleaner and readable";

let result = sentence
  .split(" ")
  .filter((word) => word.length > 4)
  .map((word) => word.toUpperCase())
  .join(" ");

console.log(result);
