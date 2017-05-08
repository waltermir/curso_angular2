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
var router_1 = require("@angular/router");
var pelicula_1 = require("../model/pelicula");
var CrearPeliculaComponent = (function () {
    function CrearPeliculaComponent(_PeliculasService, _router, _routeParams) {
        this._PeliculasService = _PeliculasService;
        this._router = _router;
        this._routeParams = _routeParams;
        this.tituloPelicula = "";
    }
    CrearPeliculaComponent.prototype.onSubmit = function () {
        this._PeliculasService.insertPelicula(this.nuevaPelicula);
        this._router.navigate(["peliculas"]);
    };
    CrearPeliculaComponent.prototype.ngOnInit = function () {
        this.nuevaPelicula = new pelicula_1.Pelicula(0, "", "", "");
        this.tituloPelicula = this._routeParams.get("titulo");
    };
    return CrearPeliculaComponent;
}());
CrearPeliculaComponent = __decorate([
    core_1.Component({
        templateUrl: "app/view/crear-pelicula.html"
    }),
    __metadata("design:paramtypes", [peliculas_service_1.PeliculasService,
        router_1.Router, typeof (_a = typeof router_1.RouteParams !== "undefined" && router_1.RouteParams) === "function" && _a || Object])
], CrearPeliculaComponent);
exports.CrearPeliculaComponent = CrearPeliculaComponent;
var _a;
//# sourceMappingURL=crear-pelicula.component.js.map