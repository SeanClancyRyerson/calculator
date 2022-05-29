//varibles to keep track of first and second operands
let curNum = null;
let savedNum = null;
let operation = null;
let savedOperation = null;
const screenText = document.getElementById("calcText");
/*
console.log("CALCS saved: " + savedNum);
console.log("CALCS op:    " + operation);
console.log("CALCS savOP: " + savedOperation);
console.log("CALCS cur:   " + curNum);
console.log("-----------");
*/

// Add event listeners for number buttons on the calculator
const calcButtons = document.querySelectorAll(".numButton");
calcButtons.forEach((calcButton) =>
  calcButton.addEventListener("click", function (e) {
    if (operation) {
      savedOperation = operation;
      operation = null;
      savedNum = curNum;
      curNum = null;
      clearOpsClass();
      clearScreen();
    }
    appendScreen(this.id);
  })
);

//add event listener for operation buttons
const opButtons = document.querySelectorAll(".operationButton");
opButtons.forEach((opButton) =>
  opButton.addEventListener("click", function (e) {
    equalsOperation();
    //allows toggle of singular operation on and off
    if (operation === this.id) {
      this.classList.toggle("operationOn");
      operation = null;
    } else {
      clearOps();
      chooseOperation(this);
    }
  })
);

//Appends digits rather than replacing entirely
function appendScreen(x) {
  if (curNum == null) {
    updateScreen(x);
  } else {
    curNum = Number(String(curNum) + String(x));
    screenText.textContent = curNum;
  }
}

//only sets the number to the value passed into it
function updateScreen(x) {
  curNum = Number(x);
  curNum = round(curNum, 3);
  curNum = screenText.textContent = curNum;
}

function chooseOperation(elem) {
  elem.classList.toggle("operationOn");
  operation = elem.id;
}

function equalsOperation() {
  if (savedOperation && savedNum && curNum) {
    let result = operate(savedOperation, savedNum, curNum);
    if (result) {
      updateScreen(result);
      savedNum = result;
      curNum = result;
      clearOps();
    } else {
      clearCalc();
      screenText.textContent = "NaN";
    }
  }
}

function clearOpsClass() {
  opButtons.forEach((opButton) => {
    opButton.classList.remove("operationOn");
  });
}

function clearOps() {
  clearOpsClass();
  operation = null;
  savedOperation = null;
}

function clearScreen() {
  screenText.textContent = "0";
}

//reset everything
function clearCalc() {
  clearScreen();
  clearOps();
  curNum = null;
  savedNum = null;
}

//backspace the current number once
function deleteButton() {
  let temp = String(curNum);
  curNum = temp.substring(0, temp.length - 1);
  updateScreen(curNum);
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
  if (y == 0) {
    return null;
  }
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

//taken from https://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}
