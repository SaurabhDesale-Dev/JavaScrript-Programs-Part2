// This is a callback function
const cal = (callback, a, b) => {
  return callback(a, b);
};

let sum = (x, y) => {
  return x + y;
};
let diff = (x, y) => {
  return x - y;
};
console.log(cal(sum, 4, 4));
console.log(cal(diff, 4, 4));
