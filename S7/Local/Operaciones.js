const readline = require ("readline-sync");
const Operaciones = {};

var a;
var b;
suma();

function suma(){
    a = readline.question("Dame el primer numero");
    b = readline.question("Dame el segundo umero");

    var resultado = parseFloat(a) + parseFloat(b);
    console.log("El resultado de la suma es", resultado);
}

function resta(){
    a = readline.question("Dame el primer numero");
    b = readline.question("Dame el segundo umero");
    var resultado = parseFloat(a) - parseFloat(b);
}

module.exports = Operaciones;
Operaciones.suma= suma;

