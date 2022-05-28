// Add event listeners for all buttons on the calculator
const calcButtons = document.querySelectorAll(".calcButton");

calcButtons.forEach((calcButton) =>
  calcButton.addEventListener("click", function (e) {
    console.log(e);
  })
);

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

/*Create a new function operate that takes an operator and 2 numbers and then 
calls one of the above functions on the numbers. */
function operate(op, x, y) {
  let ans;
  switch (op) {
    case "+":
      ans = add(x, y);
      break;
    case "-":
      ans = subtract(x, y);
      break;
    case "*":
      ans = multiply(x, y);
      break;
    case "/":
      ans = divide(x, y);
      break;
  }
  console.log(ans);
}
