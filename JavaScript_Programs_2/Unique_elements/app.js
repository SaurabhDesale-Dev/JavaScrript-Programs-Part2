//JavaScript: Find the unique elements from two arrays
const uniqueNum = (arr1, arr2) => {
  let nonUnique = [];
  let unique = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      nonUnique.push(arr1[i]);
    } else {
      unique.push(arr1[i]);
    }
  }
  console.log(unique.concat(arr2).toString());
};
uniqueNum([1, 2, 3, 54, 6, 45], [100, 2, 1, 10, 45, 7]);
