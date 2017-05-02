import {Component} from "@angular/core";
import {Pelicula} from "../model/pelicula";
import {PeliculasService} from "../services/peliculas.service";

@Component({

selector : "peliculas-list",
templateUrl: "app/view/peliculas-list.html",
providers: [PeliculasService]

})

export class PeliculasListComponent {


	public pelicula : Pelicula;
	public mostrarDatos:boolean;
	public peliculas : Array<Pelicula> ;
	public peliculaElegida : Pelicula;
	public datoServicio:string;
	
	constructor(private _peliculasService: PeliculasService){
		this.mostrarDatos = false;
		
		//this.datoServicio = _peliculasService.getPeliculas();

		this.peliculas = _peliculasService.getPeliculas();

		this.pelicula = this.peliculas[0];
		this.peliculaElegida = this.peliculas[0];
		
	}

	onShowHide(value){
		this.mostrarDatos=value;

	}

	onCambiarPelicula(pelicula){
		this.pelicula = pelicula;
		this.peliculaElegida = pelicula;
	}



}
