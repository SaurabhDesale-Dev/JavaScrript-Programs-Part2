const num = (num1, num2, arr) => {
  let displayArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num1 && arr[i] < num2) {
      displayArray.push(arr[i]);
    }
  }
  console.log(displayArray);
};

num(3, 9, [1, 4, 5, 6, 7, 8, 10]);
