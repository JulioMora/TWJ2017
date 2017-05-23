import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario:UsuarioInt = {
    nombre:"Julio",
    apellido:"Mora"
  }

  url:string="https://angular.io";
  src:string="https://angular.io/resources/images/logos/angular/angular.png";
  /*constructor(){
    console.log("Constructor");
    this.holaMundo();
    console.log(
      this.saludar(this.usuario.nombre,
        this.usuario.apellido
      ));
  }*/
parrafo:string="";
  background:string="blue";


  constructor() {
    this.parrafo="YO estuve aqui";

  }

  holaMundo(){
    console.log("Hola mundo");
  }
  saludar(nombre:string,
          apellido?:string):string{
    return `Hola ${nombre} ${apellido}`;
  }
}
interface UsuarioInt{
  nombre:string,
  apellido:string
}
