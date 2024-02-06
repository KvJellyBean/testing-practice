const calculator = {
  numberChecker: (input) => {
    return typeof input === "number";
  },

  add: (number1 = 0, number2 = 0) => {
    if (
      !calculator.numberChecker(number1) ||
      !calculator.numberChecker(number2)
    )
      return "Not a number params exist.";
    return number1 + number2;
  },

  subtract: (number1 = 0, number2 = 0) => {
    if (
      !calculator.numberChecker(number1) ||
      !calculator.numberChecker(number2)
    )
      return "Not a number params exist.";
    return number1 - number2;
  },

  divide: (number1 = 0, number2 = 1) => {
    if (
      !calculator.numberChecker(number1) ||
      !calculator.numberChecker(number2)
    )
      return "Not a number params exist.";

    if (number2 === 0) return "Can't divided by zero.";
    return number1 / number2;
  },

  multiply: (number1 = 0, number2 = 1) => {
    if (
      !calculator.numberChecker(number1) ||
      !calculator.numberChecker(number2)
    )
      return "Not a number params exist.";
    return number1 * number2;
  },
};

export default calculator;
