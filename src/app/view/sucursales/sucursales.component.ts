import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Comercios } from 'src/app/model/comercios.model';
import { Sucursales } from 'src/app/model/sucursales.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  public _datos:Sucursales[]= [];
  public _datosComercios:Comercios[]= [];
  public comerciosId:number=0;

  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { 
    this.service.validaLogin()
    this.buscar();
  }

  ngOnInit(): void {
    this.setFiltros()
  }


  buscar(){
    if(this.comerciosId != undefined && this.comerciosId>0){
      this.service.getSucursalComerciosId(this.comerciosId).subscribe(data =>{
        this._datos=data;
      })
    }else{
      this.service.getSucursales().subscribe(data => {
        this._datos=data 
      });
    }
    
  }

  grabar(){
    this.router.navigate(['./sucursalestecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:Sucursales){
    this.router.navigate(['./sucursalestecleo',data.id], { relativeTo: this.rutaActiva });
  }

  eliminar(data:Sucursales){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {
      
      this.service.deleteSucursal(data).subscribe(()=>{
        this.buscar()
      })
    }
  }

  setFiltros(){
    this.service.getComercios().subscribe(data=>{
      this._datosComercios = data;
    })
  }

}
