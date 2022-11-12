// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

function seriesResistance(arr) {
  let resistanceSum = 0;
  arr.forEach((v) => {
    resistanceSum += v;
  });
  if (resistanceSum <= 1 || resistanceSum === 0) {
    return `${resistanceSum} ohm`;
  }

  return `${resistanceSum} ohms`;
}

console.log(seriesResistance([1, 6, 4]));

