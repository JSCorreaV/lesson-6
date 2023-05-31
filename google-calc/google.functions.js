let previousValue;
let operation;

function clearScreen(){
    document.getElementById("display").value = "";
    previousValue = null;
    operation = null;
}

function updateDisplay(value){
    document.getElementById("display").value += value;
}

function deleteLastValue(){
    document.getElementById("display").value = document.getElementById("display").value.toString().slice(0,-1);
}

function equal(){
    document.getElementById("display").value = eval(document.getElementById("display").value);
    document.getElementById("log").value = `${previousValue} | ${operation} texto  ${document.getElementById("display").value}`;
}





/*function sum(a, b){
    document.getElementById("display").value = previousValue+display;
}*/
