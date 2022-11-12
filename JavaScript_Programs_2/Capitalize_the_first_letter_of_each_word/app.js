//Write a JavaScript program to capitalize the first letter of each word of a given string
const capitalize = (str) => {
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(' ');
};
console.log(capitalize('hello i am a fog'));
// let a = ['af', 'bj', 'cg', 'df', 'ey'];
