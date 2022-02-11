console.log("Hi!");

function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  if (b === "") {
    return Number(a);
  } else {
    return Number(a) * Number(b);
  }
}

function divide(a, b) {
  if (b === "") {
    return Number(a);
  } else {
    return Number(a) / Number(b);
  }
}

function operate(operator, a, b) {
  if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if (operator == "X") {
    return multiply(a, b);
  } else if (operator == "/") {
    return divide(a, b);
  }
}

const display = document.querySelector(".display p");
const numBtn = document.querySelectorAll(".number-btn");
const clear = document.querySelector(".clear");
const operatorBtn = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelector(".equal-btn");

let displayValue = "0";
let operator = "";
let firstNum = "0";
let secondNum = "";
let result = "";
const errorMsg = "Cannot be divided by 0";

numBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const input = button.textContent;
    if (
      (input != 0 && firstNum == 0 && operator == "") ||
      firstNum == result ||
      display.textContent == errorMsg
    ) {
      display.textContent = "";
      display.textContent += input;
      displayValue = display.textContent;
      firstNum = display.textContent;
    } else if (display.textContent != 0) {
      display.textContent += input;
      displayValue = display.textContent;
      firstNum = display.textContent;
    }
  });
});

clear.addEventListener("click", () => {
  display.textContent = "0";
  firstNum = "0";
  operator = "";
  displayValue = display.textContent;
  // console.log(displayValue);
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "" && display.textContent != errorMsg) {
      // console.log("No operator declared");
      operator = button.textContent;
      firstNum = displayValue;
      display.textContent += ` ${operator} `;
      displayValue = display.textContent;
    }
  });
});

equalBtn.addEventListener("click", () => {
  if (operator == "" && display.textContent != result) {
    display.textContent = displayValue;
  } else if (display.textContent == result) {
    display.textContent = result;
  } else {
    let arrays = displayValue.split(" ");
    firstNum = arrays[0];
    operator = arrays[1];
    secondNum = arrays[2];
    result = operate(operator, firstNum, secondNum);
    if (result == "Infinity" || Number.isNaN(result) === true) {
      firstNum = "0";
      display.textContent = errorMsg;
      operator = "";
    } else {
      firstNum = result;
      display.textContent = firstNum;
      operator = "";
    }
  }
});
