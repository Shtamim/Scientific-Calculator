const result=document.getElementById("output");
const btn = document.querySelectorAll(".btn");
for (item of btn){
  item.addEventListener("click",(e)=>{
    btn_text = e.target.innerText;
    
    if(btn_text === "x"){
      btn_text = "*";
    }
    if(btn_text === "÷"){
      btn_text = "/";
    }
    result.value += btn_text;
  });
}
function calculate(){
  try{
    result.value = eval(result.value);
  } catch (error) {
    alert("invalid input")
  }
}
function allClear(){
  result.value = "";
}
function delLastChar(){
  result.value =  result.value.slice(0,-1);
}
function power(){
  result.value = Math.pow(result.value,2);
}
function sin() {
  let inputValue = parseFloat(result.value);
  if (!isNaN(inputValue)) {
    result.value = "sin((" + inputValue + "))";
    result.value = Math.sin(inputValue * (Math.PI / 180)); // Convert degrees to radians
  } else {
    result.value = "Invalid input";
  }
}

function cos() {
  let inputValue = parseFloat(result.value);
  if (!isNaN(inputValue)) {
    result.value = "cos((" + inputValue + "))";
    result.value = Math.cos(inputValue * (Math.PI / 180)); // Convert degrees to radians
  } else {
    result.value = "Invalid input";
  }
}
function tan() {
  let inputValue = parseFloat(result.value);
  if (!isNaN(inputValue)) {
    if (Number.isInteger(inputValue / 90)) {
      result.value = "Undefined";
    } else {
      result.value = "tan((" + inputValue + "))";
      result.value = Math.tan(inputValue * (Math.PI / 180)); // Convert degrees to radians
    }
  } else {
    result.value = "Invalid input";
  }
}

function log() {
  let inputValue = parseFloat(result.value);
  if (inputValue > 0) {
    result.value = Math.log(inputValue);
  } else {
    result.value = "Invalid input";
  }
}
function pi() {
  result.value += Math.PI;
}

function exp(){
  result.value = Math.exp(result.value);
}
function fact() {
  let i, num, f;
  f = 1;
  num = result.value;
  
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  
  result.value = f;
}
function sqrt() {
  result.value = Math.sqrt(parseFloat(result.value));
}
function percent() {
  // Check if the current input value is a valid expression
  try {
    // Evaluate the expression in the input field
    let expression = result.value;
    let resultValue = eval(expression);

    // Calculate the percentage of the result value
    let percentage = (resultValue / 100);

    // Update the input field with the percentage value
    result.value = percentage;
  } catch (error) {
    // If the expression is invalid, display an error message
    alert("Invalid input");
  }
}

