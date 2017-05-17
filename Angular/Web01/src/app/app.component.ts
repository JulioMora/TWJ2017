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

  constructor(){
    console.log("Constructor");
    this.holaMundo();
    console.log(
      this.saludar(this.usuario.nombre,
        this.usuario.apellido
      ));
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
