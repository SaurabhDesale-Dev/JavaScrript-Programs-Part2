//Create a function that takes an array and returns the types of values (data types) in a new array.

function arrayValuesTypes(arr) {
  let dataType = [];
  arr.forEach((e) => {
    dataType.push(typeof e);
  });
  return dataType;
}
console.log(arrayValuesTypes([1, 2, "null", []]));
