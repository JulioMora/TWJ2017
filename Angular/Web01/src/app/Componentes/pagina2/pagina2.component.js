"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Pagina2Component = (function () {
    function Pagina2Component(router, rutaActiva) {
        this.router = router;
        this.rutaActiva = rutaActiva;
    }
    Pagina2Component.prototype.ngOnInit = function () {
        this.rutaActiva.params.subscribe(function (params) {
            console.log(params);
        });
    };
    Pagina2Component = __decorate([
        core_1.Component({
            selector: 'app-pagina2',
            templateUrl: './pagina2.component.html',
            styleUrls: ['./pagina2.component.css']
        })
    ], Pagina2Component);
    return Pagina2Component;
}());
exports.Pagina2Component = Pagina2Component;
//# sourceMappingURL=pagina2.component.js.map