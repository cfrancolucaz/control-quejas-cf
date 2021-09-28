import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Comercios } from 'src/app/model/comercios.model';
import { Municipios } from 'src/app/model/municipios.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-comerciostecleo',
  templateUrl: './comerciostecleo.component.html',
  styleUrls: ['./comerciostecleo.component.css']
})
export class ComerciostecleoComponent implements OnInit {

  id:number=0;
  public cls = new  Comercios();
  public _datosMunicipios:Municipios[]= [];
  
  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.setFiltros();
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);    
  } 

  cerrar() {
    this.router.navigate(['/comercios'], { relativeTo: this.rutaActiva });
  }

  grabar(){

    if(this.cls.id ==0){
      this.service.postComercios(this.cls).subscribe(data =>{
        this.snackBar.open('Registro grabado', '', {
          duration: 4000,
        });
        this.cerrar();
      })
    }else{
      this.service.putComercios(this.cls).subscribe(data =>{
        this.snackBar.open('Registro modificado', '', {
          duration: 4000,
        });
        this.cerrar();
      })
    }
    
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.getComerciosId(id).subscribe(data =>{
        this.cls=data[0];      
      })
    }
    
  }

  setFiltros(){
    this.service.getMunicipios().subscribe(data=>{
      this._datosMunicipios = data;
    })
  }

}
