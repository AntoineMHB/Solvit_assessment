// I will reverse the name
// check if reversed name and actual name are equal.
// if yes  return true
// if no  return false

function palindromChecker(word) {
  let reversedWordArray = [];
  let reversedWord;
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWordArray.push(word[i]);
  }
  reversedWord = reversedWordArray.join("");

  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromChecker("noons"));
