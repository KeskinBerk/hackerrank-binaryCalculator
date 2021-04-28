var operationType;

function clear() {
    var result = document.getElementById("res");
    result.innerHTML = "";
}

function write(e) {
    var btn = e.target || e.srcElement;
    var result = document.getElementById("res");

    switch (btn.id) {
        case 'btn0':
            result.innerHTML += "0";
            break;
        case 'btn1':
            result.innerHTML += "1";
            break;
        case 'btnSum':
            result.innerHTML += "+";
            operationType = "+";
            break;
        case 'btnSub':
            result.innerHTML += "-";
            operationType = "-";
            break;
        case 'btnMul':
            result.innerHTML += "*";
            operationType = "*";
            break;
        case 'btnDiv':
            result.innerHTML += "/";
            operationType = "/";
            break;
    }
}

function calculate() {
    var totalString = document.getElementById("res").innerHTML;
    var numbers = totalString.split(`${operationType}`);
    var numberOne = parseInt(numbers[0], 2);
    var numberTwo = parseInt(numbers[1], 2);
    var result;
    switch(operationType){
        case '+':
            result = numberOne + numberTwo;
            break;
        case '-':
            result = numberOne - numberTwo;
            break;
        case '*':
            result = numberOne * numberTwo;
            break;
        case '/':
            result = numberOne / numberTwo;
            break;
    }
    document.getElementById("res").innerHTML = result.toString(2);
}

document.getElementById("btnClr").addEventListener("click", clear);
document.getElementById("btn0").addEventListener("click", write);
document.getElementById("btn1").addEventListener("click", write);
document.getElementById("btnSum").addEventListener("click", write);
document.getElementById("btnSub").addEventListener("click", write);
document.getElementById("btnMul").addEventListener("click", write);
document.getElementById("btnDiv").addEventListener("click", write);
document.getElementById("btnEql").addEventListener("click", calculate);
