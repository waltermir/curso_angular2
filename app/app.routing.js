"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var peliculas_list_component_1 = require("./components/peliculas-list.component");
var holamundo_component_1 = require("./components/holamundo.component");
var crear_pelicula_component_1 = require("./components/crear-pelicula.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/peliculas',
        pathMatch: 'full'
    },
    {
        path: 'peliculas',
        component: peliculas_list_component_1.PeliculasListComponent
    },
    {
        path: 'hola',
        component: holamundo_component_1.HolaMundoComponent
    },
    {
        path: 'crear-pelicula',
        component: crear_pelicula_component_1.CrearPeliculaComponent
    },
    {
        path: 'crear-pelicula/:titulo',
        component: crear_pelicula_component_1.CrearPeliculaComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map