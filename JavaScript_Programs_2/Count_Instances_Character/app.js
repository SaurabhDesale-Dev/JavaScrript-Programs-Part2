// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

function charCount(myChar, str) {
  let charCount = 0;
  let arrayString = str.split("");
  arrayString.forEach((l) => {
    if (l === myChar) {
      charCount++;
    }
  });
  return charCount;
}
console.log(charCount("e", "eeedabit"));
