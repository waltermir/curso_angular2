"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var peliculas_list_component_1 = require("./components/peliculas-list.component");
var peliculas_footer_component_1 = require("./components/peliculas-footer.component");
var holamundo_component_1 = require("./components/holamundo.component");
var app_routing_1 = require("./app.routing");
var crear_pelicula_component_1 = require("./components/crear-pelicula.component");
var peliculas_service_1 = require("./services/peliculas.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent, peliculas_list_component_1.PeliculasListComponent, peliculas_footer_component_1.PeliculasFooterComponent, holamundo_component_1.HolaMundoComponent, crear_pelicula_component_1.CrearPeliculaComponent],
        providers: [app_routing_1.appRoutingProviders, peliculas_service_1.PeliculasService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map