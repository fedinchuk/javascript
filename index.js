const sumPositiveNumbers = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return console.log("One of the arguments is not a number");
  }

  if (a <= 0 || b <= 0) {
    return console.log("Numbers are not positive");
  }

  return console.log(a + b);
};

sumPositiveNumbers(-10, 5);