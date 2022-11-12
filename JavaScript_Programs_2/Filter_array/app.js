const pull = (arr, pullVal) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pullVal) {
      arr.splice(i, 1);
    }
  }
  return arr;
};
console.log(pull([33, 76, 3, 89, 56], 56));
