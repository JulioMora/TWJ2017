"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var InicioComponent = (function () {
    function InicioComponent() {
        this.nombre = "Julio";
        this.arregloUsuario = [
            {
                nombre: "Julio",
                apellido: "Mora"
            },
            {
                nombre: "Juanito",
                apellido: "Alimaña"
            },
            {
                nombre: "Pedro",
                apellido: "Navaja"
            }
        ];
    }
    InicioComponent.prototype.ngOnInit = function () {
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