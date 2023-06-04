let previousValue;
let operation;
const ADD = "+";
const SUBSTRACT = "-";
const MULTIPLY = "*";
const DIVIDE = "/";

function isOperation(value){
    if (value=="+"){
        return ADD;
    }
    if (value=="-"){
        return SUBSTRACT;
    }
    if (value=="*"){
        return MULTIPLY;
    }
    if (value=="/"){
        return DIVIDE;
    }
    return null;
}

function clearScreen(){
    document.getElementById("display").value = "";
    previousValue = null;
    operation = null;
    document.getElementById("log").value = "";
}

/*
Si previousvalue esta vacio y me envian un digito: concateno
Si me envian una operacion: guarde primer numero y operacion, muestre operacion
Si previousvalue NO esta vacio y operacion no esta vacia: concateno
*/
function updateDisplay(digit){
    if (previousValue==undefined && isOperation(digit)==null){
        document.getElementById("display").value = document.getElementById("display").value + digit;
    }
    else if (isOperation(digit)!=null){
        previousValue = document.getElementById("display").value;
        operation = digit;
        document.getElementById("display").value = digit;
    }
    else {
        if(isOperation(document.getElementById("display").value)!=null){
            document.getElementById("display").value = digit;
        }
        else{
            document.getElementById("display").value = document.getElementById("display").value + digit;
        }
    }
    console.log(`${previousValue} ${operation} ${document.getElementById("display").value}`);
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
