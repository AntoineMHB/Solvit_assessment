const tags = ["JS", "", "React", "NODE", "", "Express"];
let tagsNoEmptyStrings = [];
let lowerCaseArray = [];
let reversedArray = [];

for (let i = 0; i < tags.length; i++) {
  if (tags[i] !== "") {
    tagsNoEmptyStrings.push(tags[i]);
    lowerCaseArray.push(tags[i].toLowerCase());
  }
}

for (let i = lowerCaseArray.length - 1; i >= 0; i--) {
  reversedArray.push(lowerCaseArray[i]);
}

console.log(tagsNoEmptyStrings);
console.log(lowerCaseArray);
console.log(reversedArray);
