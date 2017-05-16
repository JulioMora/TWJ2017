/**
 * Created by julio_000 on 16/05/2017.
 */
/*let holamundo=`que tal mundo curel`;
console.log('hola mundo')*/

//booleanos
let soltero:boolean= true; //

//number
let hexadecimal:number=0xf00;
let novias:number=7;
let cadena: string='rojo';
let adevertencia:string="You're done";

let frase =`El nummero de novias es ${novias+1}`;

//arrays
let notas:number[]=[1,2,3,4,5,6]//
let jaladad:Array<number>=[1,2,3]

let nombre:any="asd"//any sirve para cualquier tipo de dato
nombre=12;

let usuario:objetousuario={//implementa la intrerface con :
    nombre:"Julio",
    apellido:"Mora",
    direccion:"Monjas"
}

interface objetousuario{
    nombre:string,
    apellido:string,
    direccion?:string,
}

class Persona{
    nombre:string;// publico por defecto
    apellido:string;
    public fechaNacimieto:Date;
    constructor(nombre?: string, apellido?: string, fechaNacimieto?: Date) {//? significa que es opcional
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimieto = fechaNacimieto
    }
    imprimirpersona(){//detecta automatico void
        console.log(this.nombre,this.apellido, this.fechaNacimieto);
    }
    imprimirPersona2():objetousuario{
        console.log(this.nombre,this.apellido);
        this.funcion1('Julio');
        return{
            nombre:this.nombre,
            apellido:this.apellido
        }
    }
    private funcion1(nombre:string,apellido?):void{
        if(apellido){
            console.log(nombre,apellido);
        }else{
            console.log(nombre);
        }

    }
}

function sumanumeros(numero1:number,numero2:number):number{
    return numero1+numero2;
}

var objeto={
    nombre:"julio",
    imprimirNombre:function () {
        return this.nombre;
    }
};

let julio:Persona=new Persona();
julio.nombre="julio";
julio.apellido="mora";
julio.fechaNacimieto=new Date("1994-04-06")
//console.log(julio.nombre);
julio.imprimirpersona();
julio.imprimirPersona2()