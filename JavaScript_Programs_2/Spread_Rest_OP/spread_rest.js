let a = [1, 3];

// const findMax = Math.max(...a);
// console.log(findMax);
// Spread Operator
(function (a, b) {
  console.log(a + b);
})(...a);

(function (...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  console.log(sum);
})(1, 2, 3, 4, 5);
