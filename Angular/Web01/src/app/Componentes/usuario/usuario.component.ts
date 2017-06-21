import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UsuarioClass} from "../../Clases/UsuarioClass";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
@Input() usuarioInput:UsuarioClass;
  @Output() usuarioOutput = new EventEmitter();
  constructor(private _http:Http) { }

  ngOnInit() {
  }
  actualizarUsuario(usuario:UsuarioClass,nombre:string){
    let actualizacion={
      nombre:nombre
    };
    this._http.put("http://localhost:1337/usuario/"+usuario.id,actualizacion).map((res)=>{return res.json})
      .subscribe(
        res=>{
          //el servidor se actualiza
          console.log("El usuario se actualizo",res);
          //let indice=this.Usuarioinput.indexOf(usuario);
          this.usuarioInput.nombre = nombre;
          this.usuarioInput.editar = !this.usuarioInput.editar;
        },
        err=>{
          //no vale  el servidor
          console.log("Hubo un error",err);
        }
      );
  }
  eliminarUsuarioBackend(usuario: UsuarioClass,indice:number) {

    this._http.delete("http://localhost:1337/Usuario/"+usuario.id)
      .subscribe(
        respuesta=>{
          this.usuarioOutput.emit(usuario);
          //this.usuarios.splice(this.usuarios.indexOf(usuario),1)
        },
        error=>{
          console.log("Error",error);
        }
      )

  }
}
