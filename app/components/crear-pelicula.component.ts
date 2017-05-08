import {Component} from "@angular/core";
import {PeliculasService} from "../services/peliculas.service";
import {Router, RouteParams} from '@angular/router';
import {Pelicula} from '../model/pelicula';
import {ngOnInit} from "@angular/core";


@Component({
	
	templateUrl: "app/view/crear-pelicula.html"

	})

export class CrearPeliculaComponent implements ngOnInit{

	public tituloPelicula : string = "";
	public nuevaPelicula : Pelicula;

	constructor (private _PeliculasService: PeliculasService,
					private _router: Router,
					private _routeParams: RouteParams){}

	onSubmit(){

		
		this._PeliculasService.insertPelicula(this.nuevaPelicula);

		this._router.navigate(["peliculas"]);
	}

	ngOnInit():any {
		this.nuevaPelicula = new Pelicula(0,"","","");
		this.tituloPelicula = this._routeParams.get("titulo");
	}




}
