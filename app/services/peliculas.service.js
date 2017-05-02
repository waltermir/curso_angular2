"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_peliculas_1 = require("./mock.peliculas");
var PeliculasService = (function () {
    function PeliculasService() {
    }
    PeliculasService.prototype.getPeliculas = function () {
        return mock_peliculas_1.PELICULAS;
    };
    PeliculasService.prototype.insertPelicula = function (peli) {
        mock_peliculas_1.PELICULAS.push(peli);
    };
    return PeliculasService;
}());
exports.PeliculasService = PeliculasService;
//# sourceMappingURL=peliculas.service.js.map