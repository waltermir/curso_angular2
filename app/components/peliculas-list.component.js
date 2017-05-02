"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var peliculas_service_1 = require("../services/peliculas.service");
var PeliculasListComponent = (function () {
    function PeliculasListComponent(_peliculasService) {
        this._peliculasService = _peliculasService;
        this.mostrarDatos = false;
        //this.datoServicio = _peliculasService.getPeliculas();
        this.peliculas = _peliculasService.getPeliculas();
        this.pelicula = this.peliculas[0];
        this.peliculaElegida = this.peliculas[0];
    }
    PeliculasListComponent.prototype.onShowHide = function (value) {
        this.mostrarDatos = value;
    };
    PeliculasListComponent.prototype.onCambiarPelicula = function (pelicula) {
        this.pelicula = pelicula;
        this.peliculaElegida = pelicula;
    };
    return PeliculasListComponent;
}());
PeliculasListComponent = __decorate([
    core_1.Component({
        selector: "peliculas-list",
        templateUrl: "app/view/peliculas-list.html",
        providers: [peliculas_service_1.PeliculasService]
    }),
    __metadata("design:paramtypes", [peliculas_service_1.PeliculasService])
], PeliculasListComponent);
exports.PeliculasListComponent = PeliculasListComponent;
//# sourceMappingURL=peliculas-list.component.js.map