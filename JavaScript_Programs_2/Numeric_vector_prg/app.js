//JavaScript: Find the sum of squares of a numeric vector

const numericVector = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + Math.pow(arr[i], 2);
  }
  console.log(sum);
};
numericVector([0, 1, 2, 3, 4]);
