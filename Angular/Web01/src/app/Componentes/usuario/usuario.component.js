"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require("rxjs/add/operator/map");
var UsuarioComponent = (function () {
    function UsuarioComponent(_http) {
        this._http = _http;
        this.usuarioOutput = new core_1.EventEmitter();
    }
    UsuarioComponent.prototype.ngOnInit = function () {
    };
    UsuarioComponent.prototype.actualizarUsuario = function (usuario, nombre) {
        var _this = this;
        var actualizacion = {
            nombre: nombre
        };
        this._http.put("http://localhost:1337/usuario/" + usuario.id, actualizacion).map(function (res) { return res.json; })
            .subscribe(function (res) {
            //el servidor se actualiza
            console.log("El usuario se actualizo", res);
            //let indice=this.Usuarioinput.indexOf(usuario);
            _this.usuarioInput.nombre = nombre;
            _this.usuarioInput.editar = !_this.usuarioInput.editar;
        }, function (err) {
            //no vale  el servidor
            console.log("Hubo un error", err);
        });
    };
    UsuarioComponent.prototype.eliminarUsuarioBackend = function (usuario, indice) {
        var _this = this;
        this._http.delete("http://localhost:1337/Usuario/" + usuario.id)
            .subscribe(function (respuesta) {
            _this.usuarioOutput.emit(usuario);
            //this.usuarios.splice(this.usuarios.indexOf(usuario),1)
        }, function (error) {
            console.log("Error", error);
        });
    };
    __decorate([
        core_1.Input()
    ], UsuarioComponent.prototype, "usuarioInput");
    __decorate([
        core_1.Output()
    ], UsuarioComponent.prototype, "usuarioOutput");
    UsuarioComponent = __decorate([
        core_1.Component({
            selector: 'app-usuario',
            templateUrl: './usuario.component.html',
            styleUrls: ['./usuario.component.css']
        })
    ], UsuarioComponent);
    return UsuarioComponent;
}());
exports.UsuarioComponent = UsuarioComponent;
//# sourceMappingURL=usuario.component.js.map