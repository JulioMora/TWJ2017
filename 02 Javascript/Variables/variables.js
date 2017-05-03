/**
 * Created by julio_000 on 03/05/2017.
 */
//variables.js
//en javascript se define una variable con la palabra reservada <var>

//enteros
var dos=2;
var tres=3;
var quince=15;
var diezYsiete=17;
console.log(dos);
console.log(tres);
console.log(quince);
console.log(diezYsiete);

//float
var dosPuntoCinco=2.5;
console.log(dosPuntoCinco);

//todas las variables

var boleano=true;
var nombre='Julio';
var fechaNacimiento=new Date();

var cuatroString='4';
cuatroString=4;
cuatroString=true;
cuatroString=-6565;
cuatroString=new Date();
cuatroString=undefined;
cuatroString=null;

var variable;
console.log(variable);
console.log(cuatroString);

var numero2=2;
console.log(typeof numero2);


//Objetos json
var Julio=  {
    id:1,
    nombre:'Julio',
    createAt: new Date(),
    updateAt:new Date(),
    casado:true,
    prestamos:false,
    hijos:null,
    altura:1.78,
    negativo:-1,
    mascota:{
        nombre:tango,
        fechaNacimiento: new Date()
    }

};

console.log(Julio,"Hola","1","2");