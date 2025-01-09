function addi(){

}

function subt(){
  
}
function mult(){
  
}
function divi(){
  
}
function allClear(){
  
}
function clear(){
  
}

function appendDisplay(value){
  let str = '';
  str += value;
  display.textContent = `${str}`;
}

const display = document.querySelector('.display');
const numbers = document.querySelector('.numbers');

numbers.addEventListener('click',function() {
  let button = numbers.querySelectorAll('button');
  display.textContent = button.textContent;
});

