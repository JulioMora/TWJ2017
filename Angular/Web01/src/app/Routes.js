"use strict";
var router_1 = require("@angular/router");
var inicio_component_1 = require("./Componentes/inicio/inicio.component");
var pagina2_component_1 = require("./Componentes/pagina2/pagina2.component");
var pagina21_component_1 = require("./Componentes/pagina21/pagina21.component");
var pagina22_component_1 = require("./Componentes/pagina22/pagina22.component");
var pagina23_component_1 = require("./Componentes/pagina23/pagina23.component");
/**
 * Created by julio_000 on 21/06/2017.
 */
exports.routes = [
    {
        path: "inicio",
        component: inicio_component_1.InicioComponent
    },
    {
        path: "pagina2/:idPagina2/pagina3/:idPagina3",
        component: pagina2_component_1.Pagina2Component,
        children: [
            {
                path: "pagina21/:idPartes",
                component: pagina21_component_1.Pagina21Component
            },
            {
                path: "pagina22/:idCompetencias",
                component: pagina22_component_1.Pagina22Component
            },
            {
                path: "pagina23/:idDuenios",
                component: pagina23_component_1.Pagina23Component
            }
        ]
    }
];
exports.ModulodeRutas = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=Routes.js.map