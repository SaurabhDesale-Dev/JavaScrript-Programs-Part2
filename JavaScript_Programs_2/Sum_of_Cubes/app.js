//Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(nums) {
  let cube = [];
  let sum = 0;
  nums.forEach((num) => {
    cube.push(Math.pow(num, 3));
  });
  cube.forEach((num) => (sum += num));
  return sum;
}

console.log(sumOfCubes([2]));
