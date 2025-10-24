let equation = {
  firstInput: '',
  operator: '',
  secondInput: ''
};
let currentInput = '';
let result = null; 

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

function updateDisplay() {
  const typetile = document.getElementById("typetile");
  typetile.textContent = currentInput;
  
  const equationtile = document.getElementById("equationtile");
  equationtile.textContent = Object.values(equation).join(' ')
}

function calculate() {
  const a = parseFloat(equation.firstInput)
  const b = parseFloat(equation.secondInput)
  switch (equation.operator) {
    case "+":
      currentInput = add(a, b).toString();
      updateDisplay();
      break;
    case "-":
      currentInput = subtract(a, b).toString();
      updateDisplay();
      break;
    case "*":
      currentInput = multiply(a, b).toString();
      updateDisplay();
      break;
    case "/":
      currentInput = divide(a, b).toString();
      updateDisplay();
      break;
    case "mod":
      currentInput = mod(a, b).toString();
      updateDisplay();
      break;
    case "**":
      currentInput = exp(a, b).toString();
      updateDisplay();
      break;
  }
}

function handleInput(e) {
  const target = e.target.id;
  const value = e.target.innerText;

  switch (target) {
    case "cleartile":
      if (currentInput !== '') {
        currentInput = '';
      }
      else {
        equation.firstInput = '';
        equation.operator = '';
        equation.secondInput = '';
      }
      updateDisplay();
      break;

    case "onetile":
    case "twotile":
    case "threetile":
    case "fourtile":
    case "fivetile":
    case "sixtile":
    case "seventile":
    case "eighttile":
    case "ninetile":
      if (equation.secondInput === '') {
        currentInput += (String(value));
      }
      else {
        equation.firstInput = '';
        equation.operator = '';
        equation.secondInput = '';
        currentInput = (String(value));
      }
      updateDisplay();
      break;

    case "zerotile":
      if (currentInput !== '') {
        currentInput += value;
        updateDisplay(currentInput);
      }
      break;

    case "decitile":
      if (!currentInput.includes('.')) {
        currentInput += value; // Add decimal point if not already present
        updateDisplay(currentInput);
      }
      break;

    case "addtile":
    case "minustile":
    case "multtile":
    case "divtile":
    case "modtile":
    case "exptile":
      if (currentInput === '') {
        return;
      }
      equation.operator = value;
      if(equation.firstInput === '') {
        equation.firstInput = currentInput;
      }
      else if(equation.secondInput !== '') {
        equation.firstInput = currentInput;
        equation.secondInput = '';
      }
      currentInput = '';
      updateDisplay();
      break;

    case "equaltile":
      if (equation.operator !== '' && currentInput !== '') {
        equation.secondInput = currentInput;
        console.log(equation.firstInput, equation.operator, equation.secondInput)
        calculate();
      }
      break;

    case "percenttile":
      if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay(currentInput);
      }
      break;

    case "sqrttile":
      if (currentInput !== '') {
        equation.operator = value;
        equation.secondInput = currentInput;
        currentInput = sqrt(parseFloat(currentInput)).toString();
        updateDisplay();
      }
      break;

    case "backtile":
      currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : currentInput = '';
      updateDisplay(currentInput);
      break;

    case "closetile":
      currentInput += '(';
      updateDisplay(currentInput);
      break;

    case "opentile":
      currentInput += ')';
      updateDisplay(currentInput);
      break;

    default:
      break;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  (() => {
    console.log("Initializing app...");
    initCalc();
  })();
});


function initCalc(){
  const buttons = document.querySelectorAll(".calc-btn");

  buttons.forEach(button => {
    button.addEventListener("click", handleInput);
  });
}

