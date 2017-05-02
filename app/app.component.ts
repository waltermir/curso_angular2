import {Component} from "@angular/core";



@Component({

selector : "mi-app",
templateUrl: "app/view/peliculas.html"
})




export class AppComponent {
	
	public titulo : string;

	constructor(){
		this.titulo = "Peliculas con Anular 2";
	}
	
}