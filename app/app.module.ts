import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, RouteParams } from '@angular/router';
import { AppComponent }  from './app.component';
import {PeliculasListComponent} from "./components/peliculas-list.component";
import {PeliculasFooterComponent} from "./components/peliculas-footer.component";
import {HolaMundoComponent} from "./components/holamundo.component";
import {routing, appRoutingProviders} from './app.routing';
import {CrearPeliculaComponent} from "./components/crear-pelicula.component";
import {PeliculasService} from "./services/peliculas.service";



@NgModule({
  imports:      [ BrowserModule, FormsModule,  routing],
  declarations: [ AppComponent, PeliculasListComponent, PeliculasFooterComponent, HolaMundoComponent, CrearPeliculaComponent ],
  providers:    [appRoutingProviders, PeliculasService],
  bootstrap:    [ AppComponent ]
})



export class AppModule { }