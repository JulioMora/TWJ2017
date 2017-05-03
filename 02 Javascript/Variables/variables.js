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
        nombre:'tango',
        fechaNacimiento: new Date()
    }

};

console.log(Julio,"Hola","1","2");
console.log(Julio.mascota.fechaNacimiento);
console.log(Julio.altura);
Julio.altura=1.48;

console.log(Julio.altura);
Julio.altura={
    ancho:2.4,
    alto:1.78,
}
console.log(Julio.altura);
delete Julio.altura;
Julio.juegos='Warcraft'
console.log("objeto",Julio);

//arreglos

var arreglo=[1,
    1,
    'Julio',
    2.4,
    true,
    null,
    undefined,
    -454,
    new Date(),
    {a:'b'}];

var nuevoObjeto={
    papas:['chola','chaucha','maria'],
    cebollas:['perla','paiteña','blanca']
}

console.log(arreglo);
console.log(arreglo[4]);

var matriz=[[0,1],[2,3]];
console.log(matriz[0][0]);
console.log(nuevoObjeto.papas[1]);

var arregloObjeto=[
    {id:1, nombre1:'Julio'},
    {id:2, nombre1:'Felipe'}
];
// splice(
// 'Delimita la posisicion en la que vamos a trabajar',
// 'Numero Objetos a eliminarse')

console.log('Antes:',arregloObjeto)
arregloObjeto.splice(0,1)
console.log('Despues:',arregloObjeto)

arregloObjeto.splice(0,0,{id:3,nombre:'Carmen'})
console.log('Despues2:',arregloObjeto)

