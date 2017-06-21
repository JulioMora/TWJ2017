import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {error} from "util";
import {UsuarioClass} from "../../Clases/UsuarioClass";
import {InterfacePlanetas} from "../../Interfaces/InterfacePlanetas";
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre:string="Julio";
  //planetas=[];
  planetas : InterfacePlanetas[]=[];
  usuarios: UsuarioClass[]= [];
  nuevoUusario:UsuarioClass=new UsuarioClass("");
  arregloUsuario=[
    {
    nombre:"Julio",
    apellido:"Mora",
      conectado:true

  },
    {
      nombre:"Juanito",
      apellido:"Alimaña",
      conectado:true
    },
    {
      nombre:"Pedro",
      apellido:"Navaja",
      conectado:false
    },
    {
      nombre:"Juan",
      apellido:"Jose",
      conectado:true
    },
    {
      nombre:"Esteban",
      apellido:"Diaz",
      conectado:false
    }
  ]

  constructor(private _http:Http) {
    //Inicia la clase
    //Pero el componente no esta listo!!!
  }

  ngOnInit() {
    this._http
      .get("http://localhost:1337/Usuario/")
      .subscribe(
        respuesta=>{
          let rjson:UsuarioClass[] = respuesta.json();

          this.usuarios = rjson.map((usuario:UsuarioClass)=>{
            usuario.editar=false;
            return usuario;
          });

          console.log("Usuarios: ",this.usuarios);
        },
        error=>{
          console.log("Error: ",error)

        }
      )
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
  cargarPlanetas(){
    this._http.get("http://swapi.co/api/planets").subscribe(
      (response)=>{
        console.log("Response:",response)
        console.log(response.json());
        let respuesta=response.json();
        this.planetas=respuesta.results;
        this.planetas = this.planetas.map(
          (planeta)=>{

            planeta.imagenUrl = "/assets/Imagenes/"+planeta.name+'.jpg';

            return planeta;


          }
        );
      },
      (error)=>{
        console.log("Error",error)
      },
      ()=>{
        console.log("Finaly")
      }
    )
  }
  crearUsuario(){
    console.log("Entro a crear usuario");
   /* let usuario={
      nombre:this.nuevoUusario.nombre,



    };*/
    this._http.post("http://localhost:1337/usuario",this.nuevoUusario).subscribe(respuesta=>{
      let respuestaJSON=respuesta.json();
      console.log('respuestaJSON',respuesta.json());
      this.usuarios.push(respuestaJSON);
    },error=>{
      console.log("Error", error)
    })
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
        let indice=this.usuarios.indexOf(usuario);
        this.usuarios[indice].nombre = nombre;
        this.usuarios[indice].editar = !this.usuarios[indice].editar;
      },
        err=>{
        //no vale  el servidor
          console.log("Hubo un error",err);
        }
    );
  }
  eliminarUsuarioFrontEnd(usuario: UsuarioClass) {

    let indice = this.usuarios.indexOf(usuario);

    this.usuarios.splice(indice,1);

  }

}



