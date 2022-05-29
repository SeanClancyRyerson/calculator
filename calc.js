//varibles to keep track of first and second operands
let firstOp = null;
let secondOp = null;
let operation = null;
let operationOn = false;
const screenText = document.getElementById("calcText");

// Add event listeners for number buttons on the calculator
const calcButtons = document.querySelectorAll(".numButton");
calcButtons.forEach((calcButton) =>
  calcButton.addEventListener("click", function (e) {
    if (operationOn) {
      operationOn = false;
      secondOp = firstOp;
      firstOp = null;
      clearScreen();
    }
    appendScreen(this.id);
  })
);

//add event listener for operation buttons
const opButtons = document.querySelectorAll(".operationButton");
opButtons.forEach((opButton) =>
  opButton.addEventListener("click", function (e) {
    //allows toggle of singular operation on and off
    if (operation === this.id) {
      this.classList.toggle("operationOn");
      operationOn = false;
    } else {
      clearOps();
      chooseOperation(this);
      operationOn = true;
    }
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

function chooseOperation(elem) {
  elem.classList.toggle("operationOn");
  operation = elem.id;
  console.log(operation);
}

//TODO fix setting up to chain operations
function equalsOperation() {
  if (operation && firstOp && secondOp) {
    let result = operate(operation, firstOp, secondOp);
    screenText.textContent = result;
    secondOp = result;
    firstOp = null;
    clearOps();
    console.log("TEST21");
  }
}

function clearOps() {
  opButtons.forEach((opButton) => {
    opButton.classList.remove("operationOn");
  });
  operationOn = false;
}

function clearScreen() {
  screenText.textContent = "0";
}

//reset everything
function clearCalc() {
  clearScreen();
  clearOps();
  firstOp = null;
  secondOp = null;
  operation = null;
  operationOn = false;
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
    case "plusOp":
      ans = add(x, y);
      break;
    case "minusOp":
      ans = subtract(x, y);
      break;
    case "multOp":
      ans = multiply(x, y);
      break;
    case "divideOp":
      ans = divide(x, y);
      break;
  }
  return ans;
}
