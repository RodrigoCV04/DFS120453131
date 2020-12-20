const readline = require ("readline-sync");
const Operaciones = {};

var a;
var b;
console.log("Operaciones");
console.log("1. suma");
console.log("2. resta");
console.log("3. multiplicacion");
console.log("4. division");

opcion= readline.question("Dame el numero de la operacion ");

if(opcion==1){
    suma();
}
if(opcion==2){
    resta();
}
if(opcion==3){
    multiplicacion();
}
if(opcion==4){
    division();
}
function suma(){
    a = readline.question("Dame el primer numero ");
    b = readline.question("Dame el segundo umero ");

    var resultado = parseFloat(a) + parseFloat(b);
    console.log("El resultado de la suma es", resultado);
}

function resta(){
    a = readline.question("Dame el primer numero ");
    b = readline.question("Dame el segundo umero ");
    var resultado = parseFloat(a) - parseFloat(b);
    console.log("El resultado de la suma es", resultado);
}

function multiplicacion(){
    a = readline.question("Dame el primer numero ");
    b = readline.question("Dame el segundo umero ");
    var resultado = parseFloat(a) * parseFloat(b);
    console.log("El resultado de la suma es", resultado);
}

function division(){
    a = readline.question("Dame el primer numero ");
    b = readline.question("Dame el segundo umero ");
    var resultado = parseFloat(a) / parseFloat(b);
    console.log("El resultado de la suma es", resultado);
}

module.exports = Operaciones;
Operaciones.suma = suma;
Operaciones.resta = resta;
Operaciones.multiplicacion = multiplicacion
Operaciones.division = division

