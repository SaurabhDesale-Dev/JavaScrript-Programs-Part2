//Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.
const arr = (arr) => {
  let temp = [arr[0]];

  let lastElArray = arr.length - 1;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] !== arr[lastElArray]) {
      temp.push(temp[i] + 1);
    }
  }
  console.log(temp);
};
arr([1, 4]);
arr([-6, -4]);
