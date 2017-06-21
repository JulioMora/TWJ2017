import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EstilosComponent } from './estilos/estilos.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PlanetaStarWarsComponent } from './Componentes/planeta-star-wars/planeta-star-wars.component';
import { ClimateComponent } from './Componentes/planeta-star-wars/Componente PSW/climate/climate.component';
import { DiameterComponent } from './Componentes/planeta-star-wars/Componente PSW/diameter/diameter.component';
import { GravityComponent } from './Componentes/planeta-star-wars/Componente PSW/gravity/gravity.component';
import { OrbitalPeriodComponent } from './Componentes/planeta-star-wars/Componente PSW/orbital-period/orbital-period.component';
import { TerrainComponent } from './Componentes/planeta-star-wars/Componente PSW/terrain/terrain.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';
import {ModulodeRutas} from "./Routes";
import { Pagina21Component } from './Componentes/pagina21/pagina21.component';
import { Pagina22Component } from './Componentes/pagina22/pagina22.component';
import { Pagina23Component } from './Componentes/pagina23/pagina23.component';

@NgModule({
  declarations: [
    AppComponent,
    EstilosComponent,
    InicioComponent,
    PlanetaStarWarsComponent,
    ClimateComponent,
    DiameterComponent,
    GravityComponent,
    OrbitalPeriodComponent,
    TerrainComponent,
    UsuarioComponent,
    Pagina2Component,
    Pagina21Component,
    Pagina22Component,
    Pagina23Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModulodeRutas
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
