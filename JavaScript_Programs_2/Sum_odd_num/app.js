//Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.

function addOddToN(n) {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
addOddToN(47);
