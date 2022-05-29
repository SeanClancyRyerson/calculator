//varibles to keep track of first and second operands
let curNum = null;
let savedNum = null;
let operation = null;
let operationOn = false;
const screenText = document.getElementById("calcText");

// Add event listeners for number buttons on the calculator
const calcButtons = document.querySelectorAll(".numButton");
calcButtons.forEach((calcButton) =>
  calcButton.addEventListener("click", function (e) {
    if (operationOn) {
      operationOn = false;
      savedNum = curNum;
      curNum = null;
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
  screenText.textContent = curNum;
}

function chooseOperation(elem) {
  elem.classList.toggle("operationOn");
  operation = elem.id;
  console.log(operation);
}

function equalsOperation() {
  if (operation && curNum && savedNum) {
    let result = operate(operation, curNum, savedNum);
    screenText.textContent = result;
    savedNum = result;
    curNum = null;
    clearOps();
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
  curNum = null;
  savedNum = null;
  operation = null;
  operationOn = false;
}

function add(x, y) {
  return x + y;
}

//reverse order due to first op going into savedNum variable
function subtract(x, y) {
  return y - x;
}

function multiply(x, y) {
  return x * y;
}

//reverse order due to first op going into savedNum variable
function divide(x, y) {
  return y / x;
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
