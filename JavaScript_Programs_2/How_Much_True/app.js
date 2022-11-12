//Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
  let trueVal = 0;
  arr.forEach((e) => {
    if (e === true) {
      trueVal += 1;
    }
  });
  return trueVal;
}
//console.log(countTrue([]));

function redundant(str) {
  function value() {
    return str;
  }
  return value;
}
console.log(redundant("apple"));
