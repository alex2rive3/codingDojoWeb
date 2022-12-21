const visor = document.getElementById("display");
var cifra1 = "";
var cifra2 = "";
var operador = "";
function press(n) {
    cifra1 += n;
    visor.innerText = cifra1;
}
//optenemos el operador para poder sumar
function setOP(op) {
    operador = op;
    cifra2 = cifra1;
    cifra1 = "";
}
function clr() {
    cifra1 = "";
    cifra2 = "";
    operador = "";
    visor.innerText = 0;
}

function calculate() {
    let num1 = parseFloat(cifra1);
    let num2 = parseFloat(cifra2);
    let resultado = 0;
    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num2 - num1;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num2 / num1;
            break;
    }
    cifra1 = resultado;
    operador = "";
    visor.innerText = resultado;
}
