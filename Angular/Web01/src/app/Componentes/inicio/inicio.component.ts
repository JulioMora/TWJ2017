import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre:string="Julio";

  arregloUsuario=[
    {
    nombre:"Julio",
    apellido:"Mora"
  },
    {
      nombre:"Juanito",
      apellido:"Alimaña"
    },
    {
      nombre:"Pedro",
      apellido:"Navaja"
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  cambiarNombre()
  {
    this.nombre="Rafico a Lenin";
  }
  cambiarOtroNombre(){
    this.nombre="Lenin a Rafico";
  }
  cambiarNombreInput(nombreEtiqueta){
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);
    this.nombre=nombreEtiqueta.value;
  }

}
