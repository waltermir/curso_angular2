import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PeliculasListComponent} from "./components/peliculas-list.component";
import {HolaMundoComponent} from "./components/holamundo.component";
import {CrearPeliculaComponent} from "./components/crear-pelicula.component";

const appRoutes: Routes = [
	
	{
		path : '',
		redirectTo : '/peliculas',
		pathMatch: 'full'
	},
	{
		path : 'peliculas',
		component: PeliculasListComponent
	},

	{
		path : 'hola',
		component: HolaMundoComponent
	},

		{
		path : 'crear-pelicula',
		component: CrearPeliculaComponent
	}


];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);