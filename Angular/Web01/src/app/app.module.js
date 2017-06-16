"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var estilos_component_1 = require('./estilos/estilos.component');
var inicio_component_1 = require('./Componentes/inicio/inicio.component');
var planeta_star_wars_component_1 = require('./Componentes/planeta-star-wars/planeta-star-wars.component');
var climate_component_1 = require('./Componentes/planeta-star-wars/Componente PSW/climate/climate.component');
var diameter_component_1 = require('./Componentes/planeta-star-wars/Componente PSW/diameter/diameter.component');
var gravity_component_1 = require('./Componentes/planeta-star-wars/Componente PSW/gravity/gravity.component');
var orbital_period_component_1 = require('./Componentes/planeta-star-wars/Componente PSW/orbital-period/orbital-period.component');
var terrain_component_1 = require('./Componentes/planeta-star-wars/Componente PSW/terrain/terrain.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                estilos_component_1.EstilosComponent,
                inicio_component_1.InicioComponent,
                planeta_star_wars_component_1.PlanetaStarWarsComponent,
                climate_component_1.ClimateComponent,
                diameter_component_1.DiameterComponent,
                gravity_component_1.GravityComponent,
                orbital_period_component_1.OrbitalPeriodComponent,
                terrain_component_1.TerrainComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [],
            bootstrap: [inicio_component_1.InicioComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map