"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Pagina23Component = (function () {
    function Pagina23Component(router, rutaActiva) {
        this.router = router;
        this.rutaActiva = rutaActiva;
    }
    Pagina23Component.prototype.ngOnInit = function () {
        this.rutaActiva.params.subscribe(function (params) {
            console.log(params);
        });
    };
    Pagina23Component = __decorate([
        core_1.Component({
            selector: 'app-pagina23',
            templateUrl: './pagina23.component.html',
            styleUrls: ['./pagina23.component.css']
        })
    ], Pagina23Component);
    return Pagina23Component;
}());
exports.Pagina23Component = Pagina23Component;
//# sourceMappingURL=pagina23.component.js.map