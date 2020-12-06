//Global Variable
let heldValue = null;
let heldOperation = null;
let nextValue = null;

//Click Functions

$(".digits button").click(function () {
  if (nextValue === null) nextValue = 0;
  nextValue = nextValue + $(this).text();
  if (heldValue !== null && heldOperation === null) heldValue = null;
  updateDisplay();
});

$(".add").click(function () {
  setHeldOperation("add");
  $(".next-operation").text("+");
  updateDisplay();
});

$(".subtract").click(function () {
  setHeldOperation("subtract");
  $(".next-operation").text("-");
  updateDisplay();
});

$(".multiply").click(function () {
  setHeldOperation("multiply");
  $(".next-operation").text("");
  updateDisplay();
});

$(".divide").click(function () {
  setHeldOperation("divide");
  $(".next-operation").text("/");
  updateDisplay();
});

$(".plusMinus").click(function () {
  setHeldOperation("plusMinus");
  nextValue = null;
  updateDisplay();
});

$(".squareRoot").click(function () {
  setHeldOperation("squareRoot");
  nextValue = null;
  updateDisplay();
});

$(".cubeRoot").click(function () {
  setHeldOperation("cubeRoot");
  nextValue = null;
  updateDisplay();
});

$(".equals").click(function () {
  setHeldOperation(null);
  $(".next-operation").text("");
  updateDisplay();
});

$(".clear-all").click(function () {
  clearAll();
  updateDisplay();
});

$(".clear-entry").click(function () {
  clearEntry();
  updateDisplay();
});


//Helper Functions

function showValue(location, value) {
  if (value === null) $(location).text("");
  else $(location).text(Number(value));
}

function updateDisplay() {
  showValue(".held-value", heldValue);
  showValue(".next-value", nextValue);
}

function clearAll() {
  nextValue = null;
  heldValue = null;
  heldOperation = null;
  $(".next-operation").text("");
}

function clearEntry() {
  nextValue = null;
}

// Math Functions
function add(x, y) {
  return Number(x) + Number(y);
}

function subtract(x, y) {
  return Number(x) - Number(y);
}
function multiply(x, y) {
  return Number(x) * Number(y);
}
function divide(x, y) {
  return Number(x) / Number(y);
}
function plusMinus(x) {
  if (Math.sign(Number(x)) === 1) return ~Number(x) + 1;
  else return Math.abs(Number(x));
}
function squareRoot(x) {
  return Math.sqrt(Number(x));
}
function cubeRoot(x) {
  return Math.cbrt(Number(x));
}

function heldOperations(heldValue, nextValue) {
  switch (heldOperation) {
    case "add":
      return add(heldValue, nextValue);
      break;
    case "subtract":
      return subtract(heldValue, nextValue);
      break;
    case "multiply":
      return multiply(heldValue, nextValue);
      break;
    case "divide":
      return divide(heldValue, nextValue);
      break;
    case "plusMinus":
      return plusMinus(nextValue);
      break;
    case "squareRoot":
      return squareRoot(nextValue);
      break;
    case "cubeRoot":
      return cubeRoot(nextValue);
  }
}

function setHeldOperation(operation) {
  if (
    operation === "plusMinus" ||
    operation === "squareRoot" ||
    operation === "cubeRoot"
  ) {
    heldOperation = operation;
  }
  if (heldOperation !== null) {
    heldValue = heldOperations(heldValue, nextValue);
  } else if (nextValue !== null) {
    heldValue = nextValue;
  }
  nextValue = null;
  heldOperation = operation;
}

clearAll();
updateDisplay();
