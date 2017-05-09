/**
 * Created by julio_000 on 09/05/2017.
 */
var conHambre={nombre:"adrian"} //undefined null y false 0 lo mismo

//{}objeto vacio es true arreglo vacio tambien true

//conhambre.apellido es undefined conhambre.apellido.primero bota eeroro
if(conHambre){
    console.log("Como")
}else{
   console.log("trabajar")
}

var numero=null;
switch (numero){
    case 1:
        console.log('es 1');
        break;
    case 5:
        console.log(numero)
        break;
    default:
        console.log('no es ni 1 ni 5');
}