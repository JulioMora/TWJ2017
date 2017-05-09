/**
 * Created by julio_000 on 03/05/2017.
 */

function holaMundo() {
    console.log('Hola Mundo');
}

holaMundo();

function Doble(numero) {
return numero*2;
}
function multiplicar2(a,b) {
    return a*b;
}
var dos=multiplicar2(1,2);
var multiplicar=multiplicar2;
console.log(Doble(2));
console.log(multiplicar2(4,3));
console.log(multiplicar2(6,4));
console.log(multiplicar(6,3));

var hola=function () { //funcion anonima void

    console.log('hola')
}
var resultado=hola()
console.log(resultado);
console.log('funcion',holaMundo); // da la definicion de la funcion (sin los parentesis)

function hazAlgo(algo) {
    algo();
}
hazAlgo(function () {
    console.log('Hola')
})

function TransformarNumero(numero,tranformacion) {
    tranformacion(numero);
}
TransformarNumero(5,function (numero) {
    return numero*2;
})
TransformarNumero(8,function (numero) {
    return numero/2;
})