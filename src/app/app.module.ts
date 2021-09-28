import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './view/login/login.component';
import { QuejasComponent } from './view/quejas/quejas.component';
import { RegionesComponent } from './view/regiones/regiones.component';
import { RegionestecleoComponent } from './view/regiones/regionestecleo/regionestecleo.component';
import { DepartamentosComponent } from './view/departamentos/departamentos.component';
import { DepartamentostecleoComponent } from './view/departamentos/departamentostecleo/departamentostecleo.component';
import { MunicipiosComponent } from './view/municipios/municipios.component';
import { MunicipiostecleoComponent } from './view/municipios/municipiostecleo/municipiostecleo.component';
import { ComerciosComponent } from './view/comercios/comercios.component';
import { ComerciostecleoComponent } from './view/comercios/comerciostecleo/comerciostecleo.component';
import { SucursalesComponent } from './view/sucursales/sucursales.component';
import { SucursalestecleoComponent } from './view/sucursales/sucursalestecleo/sucursalestecleo.component';
import { UsuariosComponent } from './view/usuarios/usuarios.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { FiltroquejasComponent } from './view/filtroquejas/filtroquejas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuejasComponent,
    RegionesComponent,
    RegionestecleoComponent,
    DepartamentosComponent,
    DepartamentostecleoComponent,
    MunicipiosComponent,
    MunicipiostecleoComponent,
    ComerciosComponent,
    ComerciostecleoComponent,
    SucursalesComponent,
    SucursalestecleoComponent,
    UsuariosComponent,
    InicioComponent,
    FiltroquejasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
