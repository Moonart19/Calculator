function add(a, b) {
  return a + b
}
function sub(a, b) {
  return a - b
}
function mul(a, b) {
  return a * b
}
function div(a, b) {
  if(b !== 0)
    return a / b;
}

let num1, op, num2;

function operate(op, num1,num2) {
  let result;
  switch(op) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = sub(num1,num2);
      break;
    case '*':
      result = mul(num1,num2);
      break;
    case '/':
      result = div(num1,num2);
      break;
    default:
      alert("Invalid Format");
  }
  return result;
}

let string = "";
let display = document.querySelector('.display');

const buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach(button => {
  button.addEventListener('click', (event) => {
    if(event.target.textContent === 'C') {
      clear();
    } else if(
      event.target.textContent === '=') {
      calculate();
    }
     else {
     appendString(event);
    }
    

  });
});

function calculate() {
  let operatorMatch = string.match(/[+\-*/]/);

  if (!operatorMatch) {
    display.textContent = "Invalid input";
    return;
  }
  
  op = operatorMatch[0];

  let parts = string.split(op);

  if (parts.length !== 2) {
    display.textContent = "Invalid format";
    return;
  }

  num1 = parseInt(parts[0]);
  num2 = parseInt(parts[1]);

  if(isNaN(num1) || isNaN(num2)) {
    display.textContent = "Invalid Number";
    console.log(num1,num2);
    
    return;
  }

  let result = operate(op,num1,num2);
  display.textContent = result !== undefined ? result: "Error";

}

function appendString(event) {
  string += event.target.textContent;
  display.textContent =  string;
}

function clear() {
  string = "";
  display.textContent = "All Clear.."
}

