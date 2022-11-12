//Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr) {
  let finalArr = arr.filter((e) => typeof e === "number");
  return finalArr;
}
