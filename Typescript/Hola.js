/**
 * Created by julio_000 on 16/05/2017.
 */
/*let holamundo=`que tal mundo curel`;
console.log('hola mundo')*/
//booleanos
var soltero = true; //
//number
var hexadecimal = 0xf00;
var novias = 7;
var cadena = 'rojo';
var adevertencia = "You're done";
var frase = "El nummero de novias es " + (novias + 1);
//arrays
var notas = [1, 2, 3, 4, 5, 6]; //
var jaladad = [1, 2, 3];
var nombre = "asd"; //any sirve para cualquier tipo de dato
nombre = 12;
var usuario = {
    nombre: "Julio",
    apellido: "Mora",
    direccion: "Monjas"
};
var Persona = (function () {
    function Persona(nombre, apellido, fechaNacimieto) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimieto = fechaNacimieto;
    }
    Persona.prototype.imprimirpersona = function () {
        console.log(this.nombre, this.apellido, this.fechaNacimieto);
    };
    Persona.prototype.imprimirPersona2 = function () {
        console.log(this.nombre, this.apellido);
        this.funcion1('Julio');
        return {
            nombre: this.nombre,
            apellido: this.apellido
        };
    };
    Persona.prototype.funcion1 = function (nombre, apellido) {
        if (apellido) {
            console.log(nombre, apellido);
        }
        else {
            console.log(nombre);
        }
    };
    return Persona;
}());
function sumanumeros(numero1, numero2) {
    return numero1 + numero2;
}
var objeto = {
    nombre: "julio",
    imprimirNombre: function () {
        return this.nombre;
    }
};
var julio = new Persona();
julio.nombre = "julio";
julio.apellido = "mora";
julio.fechaNacimieto = new Date("1994-04-06");
//console.log(julio.nombre);
julio.imprimirpersona();
julio.imprimirPersona2();
//# sourceMappingURL=Hola.js.map