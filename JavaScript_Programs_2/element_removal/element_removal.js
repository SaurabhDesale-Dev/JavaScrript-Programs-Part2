//Remove specified elements from the left of a given array of elements
const removeElement = (arr, n) => {
  arr.splice(0, n);
  return arr;
};
console.log(removeElement([1, 2, 3], 2));
