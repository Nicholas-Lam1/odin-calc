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
  return a / b;
}

function mod(a, b) {
  return a % b;
}

function exp(a, b) {
  return a ** b;
}

function sqrt(a) {
  return a ** (1/2);
}



document.addEventListener("DOMContentLoaded", () => {
  (() => {
    console.log("Initializing app...");
    initCalc();
  })();
});


function initCalc(){
  const buttons = document.querySelectorAll(".calc-btn");

  // Handle clicks
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      handleInput(button.id);
    });
  });
}

