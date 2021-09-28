import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComerciosComponent } from './view/comercios/comercios.component';
import { ComerciostecleoComponent } from './view/comercios/comerciostecleo/comerciostecleo.component';
import { DepartamentosComponent } from './view/departamentos/departamentos.component';
import { DepartamentostecleoComponent } from './view/departamentos/departamentostecleo/departamentostecleo.component';
import { FiltroquejasComponent } from './view/filtroquejas/filtroquejas.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { LoginComponent } from './view/login/login.component';
import { MunicipiosComponent } from './view/municipios/municipios.component';
import { MunicipiostecleoComponent } from './view/municipios/municipiostecleo/municipiostecleo.component';
import { QuejasComponent } from './view/quejas/quejas.component';
import { RegionesComponent } from './view/regiones/regiones.component';
import { RegionestecleoComponent } from './view/regiones/regionestecleo/regionestecleo.component';
import { SucursalesComponent } from './view/sucursales/sucursales.component';
import { SucursalestecleoComponent } from './view/sucursales/sucursalestecleo/sucursalestecleo.component';
import { UsuariosComponent } from './view/usuarios/usuarios.component';

const routes: Routes = [
  {path: 'filtroquejas',component:FiltroquejasComponent},
  {path: 'inicio',component:InicioComponent},
  {path: 'usuarios',component:UsuariosComponent},
  {path: 'sucursales',children:[{path:'', component:SucursalesComponent},{path:'sucursalestecleo/:Id',component:SucursalestecleoComponent}]},
  {path: 'comercios',children:[{path:'', component:ComerciosComponent},{path:'comerciostecleo/:Id',component:ComerciostecleoComponent}]},
  {path: 'municipios',children:[{path:'', component:MunicipiosComponent},{path:'municipiostecleo/:Id',component:MunicipiostecleoComponent}]},
  {path: 'departamentos',children:[{path:'', component:DepartamentosComponent},{path:'departamentostecleo/:Id',component:DepartamentostecleoComponent}]},
  {path: 'regiones',children:[{path:'', component:RegionesComponent},{path:'regionestecleo/:Id',component:RegionestecleoComponent}]},
  {path: 'quejas',component:QuejasComponent},
  {path: 'login',component:LoginComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
