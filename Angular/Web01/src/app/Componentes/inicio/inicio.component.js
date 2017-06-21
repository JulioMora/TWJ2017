"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require("rxjs/add/operator/map");
var UsuarioClass_1 = require("../../Clases/UsuarioClass");
var InicioComponent = (function () {
    function InicioComponent(_http) {
        this._http = _http;
        this.nombre = "Julio";
        //planetas=[];
        this.planetas = [];
        this.usuarios = [];
        this.nuevoUusario = new UsuarioClass_1.UsuarioClass("");
        this.arregloUsuario = [
            {
                nombre: "Julio",
                apellido: "Mora",
                conectado: true
            },
            {
                nombre: "Juanito",
                apellido: "Alimaña",
                conectado: true
            },
            {
                nombre: "Pedro",
                apellido: "Navaja",
                conectado: false
            },
            {
                nombre: "Juan",
                apellido: "Jose",
                conectado: true
            },
            {
                nombre: "Esteban",
                apellido: "Diaz",
                conectado: false
            }
        ];
        //Inicia la clase
        //Pero el componente no esta listo!!!
    }
    InicioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http
            .get("http://localhost:1337/Usuario/")
            .subscribe(function (respuesta) {
            var rjson = respuesta.json();
            _this.usuarios = rjson.map(function (usuario) {
                usuario.editar = false;
                return usuario;
            });
            console.log("Usuarios: ", _this.usuarios);
        }, function (error) {
            console.log("Error: ", error);
        });
    };
    InicioComponent.prototype.cambiarNombre = function () {
        this.nombre = "Rafico a Lenin";
    };
    InicioComponent.prototype.cambiarOtroNombre = function () {
        this.nombre = "Lenin a Rafico";
    };
    InicioComponent.prototype.cambiarNombreInput = function (nombreEtiqueta) {
        console.log(nombreEtiqueta.value);
        console.log(nombreEtiqueta.type);
        console.log(nombreEtiqueta.placeholder);
        this.nombre = nombreEtiqueta.value;
    };
    InicioComponent.prototype.cargarPlanetas = function () {
        var _this = this;
        this._http.get("http://swapi.co/api/planets").subscribe(function (response) {
            console.log("Response:", response);
            console.log(response.json());
            var respuesta = response.json();
            _this.planetas = respuesta.results;
            _this.planetas = _this.planetas.map(function (planeta) {
                planeta.imagenUrl = "/assets/Imagenes/" + planeta.name + '.jpg';
                return planeta;
            });
        }, function (error) {
            console.log("Error", error);
        }, function () {
            console.log("Finaly");
        });
    };
    InicioComponent.prototype.crearUsuario = function () {
        var _this = this;
        console.log("Entro a crear usuario");
        /* let usuario={
           nombre:this.nuevoUusario.nombre,
     
     
     
         };*/
        this._http.post("http://localhost:1337/usuario", this.nuevoUusario).subscribe(function (respuesta) {
            var respuestaJSON = respuesta.json();
            console.log('respuestaJSON', respuesta.json());
            _this.usuarios.push(respuestaJSON);
        }, function (error) {
            console.log("Error", error);
        });
    };
    InicioComponent.prototype.actualizarUsuario = function (usuario, nombre) {
        var _this = this;
        var actualizacion = {
            nombre: nombre
        };
        this._http.put("http://localhost:1337/usuario/" + usuario.id, actualizacion).map(function (res) { return res.json; })
            .subscribe(function (res) {
            //el servidor se actualiza
            console.log("El usuario se actualizo", res);
            var indice = _this.usuarios.indexOf(usuario);
            _this.usuarios[indice].nombre = nombre;
            _this.usuarios[indice].editar = !_this.usuarios[indice].editar;
        }, function (err) {
            //no vale  el servidor
            console.log("Hubo un error", err);
        });
    };
    InicioComponent.prototype.eliminarUsuarioFrontEnd = function (usuario) {
        var indice = this.usuarios.indexOf(usuario);
        this.usuarios.splice(indice, 1);
    };
    InicioComponent = __decorate([
        core_1.Component({
            selector: 'app-inicio',
            templateUrl: './inicio.component.html',
            styleUrls: ['./inicio.component.css']
        })
    ], InicioComponent);
    return InicioComponent;
}());
exports.InicioComponent = InicioComponent;
//# sourceMappingURL=inicio.component.js.map