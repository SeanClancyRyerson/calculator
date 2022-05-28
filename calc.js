//varibles to keep track of first and second operands
let firstOp = null;
let secondOp = null;
const screenText = document.getElementById("calcText");

// Add event listeners for number buttons on the calculator
const calcButtons = document.querySelectorAll(".numButton");
calcButtons.forEach((calcButton) =>
  calcButton.addEventListener("click", function (e) {
    appendScreen(this.id);
  })
);

//add event listener for operation buttons
const opButtons = document.querySelectorAll(".operationButton");
opButtons.forEach((opButton) =>
  opButton.addEventListener("click", function (e) {
    console.log(e);
  })
);

//Appends digits rather than replacing entirely
function appendScreen(x) {
  if (firstOp == null) {
    updateScreen(x);
  } else {
    firstOp = Number(String(firstOp) + String(x));
    screenText.textContent = firstOp;
  }
}
//only sets the number to the value passed into it
function updateScreen(x) {
  firstOp = Number(x);
  screenText.textContent = firstOp;
}

function clearCalc() {
  screenText.textContent = "0";
  firstOp = null;
  secondOp = null;
}

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
