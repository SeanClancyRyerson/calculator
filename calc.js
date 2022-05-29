//varibles to keep track of first and second operands
let curNum = null;
let savedNum = null;
let operation = null;
const screenText = document.getElementById("calcText");

// Add event listeners for number buttons on the calculator
const calcButtons = document.querySelectorAll(".numButton");
calcButtons.forEach((calcButton) =>
  calcButton.addEventListener("click", function (e) {
    if (operation) {
      savedNum = curNum;
      curNum = null;
      clearScreen();
    }
    appendScreen(this.id);
    console.log("CALCS saved: " + savedNum);
    console.log("CALCS op:    " + operation);
    console.log("CALCS cur:   " + curNum);
    console.log("-----------");
  })
);

//add event listener for operation buttons
const opButtons = document.querySelectorAll(".operationButton");
opButtons.forEach((opButton) =>
  opButton.addEventListener("click", function (e) {
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
  screenText.textContent = curNum;
}

function chooseOperation(elem) {
  elem.classList.toggle("operationOn");
  operation = elem.id;
  console.log("CHOPS saved: " + savedNum);
  console.log("CHOPS op:    " + operation);
  console.log("CHOPS cur:   " + curNum);
  console.log("-----------");
}

function equalsOperation() {
  console.log("EQUALS saved: " + savedNum);
  console.log("EQUALS op:    " + operation);
  console.log("EQUALS cur:   " + curNum);
  if (operation && savedNum && curNum) {
    let result = operate(operation, savedNum, curNum);
    screenText.textContent = result;
    savedNum = result;
    curNum = result;
    clearOps();
  }
  console.log("EQUALS ans:   " + savedNum);
  console.log("-----------");
}

function clearOps() {
  opButtons.forEach((opButton) => {
    opButton.classList.remove("operationOn");
  });
  operation = null;
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
