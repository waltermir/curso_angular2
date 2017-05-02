import {Component} from "@angular/core";
import {PeliculasService} from "../services/peliculas.service";
import {Router} from '@angular/router';
import {Pelicula} from '../model/pelicula';


@Component({
	
	templateUrl: "app/view/crear-pelicula.html"

	})

export class CrearPeliculaComponent{

	public tituloPelicula : string = "";
	public nuevaPelicula : Pelicula;

	constructor (private _PeliculasService: PeliculasService,
					private _router: Router/*,
					private _routeParams: RouteParams*/){}

	onSubmit(){

		
		this._PeliculasService.insertPelicula(this.nuevaPelicula);

		this._router.navigate(["peliculas"]);
	}

	ngOnInit():any {
		this.nuevaPelicula = new Pelicula(0,"","","");
	}




}
