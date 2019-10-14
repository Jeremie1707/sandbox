const sumOfNegative = (numbers) => {
  // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
  // iterate over an array
  // assign and Increment a variable sum
  let sumOfNumber = 0;
  numbers.forEach((number) => {
    if (number < 0) {
      sumOfNumber += number;
    }
  });
  return sumOfNumber;
};

console.log(sumOfNegative([-4, 5, -2, 9]));

module.exports = sumOfNegative; // Do not remove.
