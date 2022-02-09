console.log("Hi!");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot be divided by 0";
  } else {
    return a / b;
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
const btn = document.querySelectorAll(".btn");
const clear = document.querySelector(".clear");

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(item.textContent);
    const input = item.textContent;
    if (input != 0 && display.textContent == 0) {
      display.textContent = "";
      display.textContent += item.textContent;
    } else if (display.textContent != 0) {
      display.textContent += item.textContent;
    }
  });
});

clear.addEventListener("click", () => {
  display.textContent = "0";
});
