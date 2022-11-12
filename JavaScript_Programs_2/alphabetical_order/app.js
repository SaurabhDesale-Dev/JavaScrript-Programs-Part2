//Write a JavaScript function that returns a passed string with letters in alphabetical order.
const sortWord = (str) => {
  let alphabet = str.split('').sort();
  console.log(alphabet.join(''));
};
sortWord('saurabh');
