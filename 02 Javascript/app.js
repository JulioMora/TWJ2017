/**
 * Created by julio_000 on 03/05/2017.
 */

//aqui escribi para imprimir en consola
console.log("hello world y se la creyo");
i=2018;
var Julio={
    nombre:'Julio',
    apellido:'Mora',
    fecha:new Date(),
    imprimir:function () { //funcion anonima void

        //console.log(Julio.nombre,Julio.apellido);
        console.log(this.nombre,this.apellido);//acceso a los atributos del mismo objeto
    },
    anio:function () {
        return this.fecha.getFullYear();

    },
    diferenciaEdad:function (edadComparar) {
        return Math.abs((this.fecha.getFullYear())-edadComparar)
    }
}

Julio.imprimir();
console.log(Julio.anio());
console.log(Julio.diferenciaEdad(2018))