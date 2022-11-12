// Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"

const rowArray = (arr) => {
  let rowNumber = 0;
  let rowArrPush = [];
  for (let i = 0; i < arr.length; i++) {
    rowArrPush.push(arr[i]);
    rowNumber += 1;
    console.log(`$Row ${rowNumber} \n ${rowArrPush[i].join('\n')}`);
  }
};
rowArray([
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
]);
