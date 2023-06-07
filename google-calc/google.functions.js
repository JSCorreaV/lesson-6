let previousValue;
let operation;
const ADD = "+";
const SUBSTRACT = "-";
const MULTIPLY = "*";
const DIVIDE = "/";

function isOperation(digit){
    if (digit=="+"){
        return ADD;
    }
    if (digit=="-"){
        return SUBSTRACT;
    }
    if (digit=="*"){
        return MULTIPLY;
    }
    if (digit=="/"){
        return DIVIDE;
    }
    return null;
}

function clearScreen(){
    document.getElementById("display").value = "";
    previousValue = null;
    operation = null;
}

/*
Si previousvalue esta vacio y me envian un digito: concateno
Si me envian una operacion: guarde primer numero y operacion, muestre operacion
Si previousvalue NO esta vacio y operacion no esta vacia: concateno
*/
function updateDisplay(digit){
    if (isOperation(digit)!=null){
        previousValue = document.getElementById("display").value;
        document.getElementById("display").value = digit;
        operation = digit;
    } 
    else if (isOperation(document.getElementById("display").value)!=null){
        document.getElementById("display").value = digit;
    }
    else {
        document.getElementById("display").value = document.getElementById("display").value + digit;
    }
}

function deleteLastValue(){
    document.getElementById("display").value = document.getElementById("display").value.toString().slice(0,-1);
}

function equal(){
    document.getElementById("log").value = `${previousValue} ${operation} ${document.getElementById("display").value}`;
    if (operation==ADD){
        document.getElementById("display").value = Number(previousValue) + Number(document.getElementById("display").value);
    }
    if (operation==SUBSTRACT){
        document.getElementById("display").value = Number(previousValue) - Number(document.getElementById("display").value);
    }
    if (operation==MULTIPLY){
        document.getElementById("display").value = Number(previousValue) * Number(document.getElementById("display").value);
    }
    if (operation==DIVIDE){
        document.getElementById("display").value = Number(previousValue) / Number(document.getElementById("display").value);
    }
}







/*function sum(a, b){
    document.getElementById("display").value = previousValue+display;
}*/
