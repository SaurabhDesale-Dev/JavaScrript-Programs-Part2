// Create a function that returns a number, based on the string provided. Here is a list of all digits:

function word(s) {
  let words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (i = 0; i < words.length; i++) {
    if (words[i] === s) {
      return i;
    }
  }
}

console.log(word("three"));
