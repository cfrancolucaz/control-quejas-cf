import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Comercios } from 'src/app/model/comercios.model';
import { Sucursales } from 'src/app/model/sucursales.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-sucursalestecleo',
  templateUrl: './sucursalestecleo.component.html',
  styleUrls: ['./sucursalestecleo.component.css']
})
export class SucursalestecleoComponent implements OnInit {

  id:number=0;
  public cls = new  Sucursales();
  public _datosComercios:Comercios[]= [];
  
  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.setFiltros();
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);    
  } 

  cerrar() {
    this.router.navigate(['/sucursales'], { relativeTo: this.rutaActiva });
  }

  grabar(){

    this.service.getComerciosId(this.cls.comerciosId).subscribe(data=>{
      this.cls.departamentosId = data[0].id;
      this.cls.municipiosId = data[0].municipiosId;
      console.log("GetComercios")
  
      this.service.getMunicipioId(data[0].municipiosId).subscribe(data=>{
        console.log("GetMunicipios")
 
        this.service.getDepartamentosId(data[0].departamentosId).subscribe(data =>{
          console.log("GetDepartamentos")

          this.cls.regionesId = data[0].regionesId;

          if(this.cls.id ==0){
            this.service.postSucursal(this.cls).subscribe(data =>{
              this.snackBar.open('Registro grabado', '', {
                duration: 4000,
              });
              this.cerrar();
            })
          }else{
            this.service.putSucursal(this.cls).subscribe(data =>{
              this.snackBar.open('Registro modificado', '', {
                duration: 4000,
              });
              this.cerrar();
            })
          }
        })
      })
    })

    
    
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.getSucursalId(id).subscribe(data =>{
        this.cls=data[0];      
      })
    }
    
  }

  setFiltros(){
    this.service.getComercios().subscribe(data=>{
      this._datosComercios = data;
    })
  }


}
