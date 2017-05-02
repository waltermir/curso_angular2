import {PELICULAS} from "./mock.peliculas";
import {Pelicula} from '../model/pelicula';

export class PeliculasService {

	getPeliculas(){
		return PELICULAS;
	}


	insertPelicula(peli : Pelicula){
		PELICULAS.push(peli);

	}

}