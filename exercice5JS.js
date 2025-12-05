const messyText = "  hello_world ";

let goodText = messyText
  .trim()
  .replace("_", " ")
  .split(" ")
  .map((text) => text.replace("h", "H"))
  .map((text) => text.replace("w", "W"))
  .join(" ");

console.log(goodText);
