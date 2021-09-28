import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamentos } from 'src/app/model/departamentos.model';
import { Municipios } from 'src/app/model/municipios.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-municipiostecleo',
  templateUrl: './municipiostecleo.component.html',
  styleUrls: ['./municipiostecleo.component.css']
})
export class MunicipiostecleoComponent implements OnInit {

  id:number=0;
  public cls = new  Municipios();
  public _datosDepartamentos:Departamentos[]= [];
  
  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.setFiltros();
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);    
  } 

  cerrar() {
    this.router.navigate(['/municipios'], { relativeTo: this.rutaActiva });
  }

  grabar(){

    if(this.cls.id ==0){
      this.service.postMunicipio(this.cls).subscribe(data =>{
        this.snackBar.open('Registro grabado', '', {
          duration: 4000,
        });
        this.cerrar();
      })
    }else{
      this.service.putMunicipio(this.cls).subscribe(data =>{
        this.snackBar.open('Registro modificado', '', {
          duration: 4000,
        });
        this.cerrar();
      })
    }
    
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.getMunicipioId(id).subscribe(data =>{
        this.cls=data[0];      
      })
    }
    
  }

  setFiltros(){
    this.service.getDepartamentos().subscribe(data=>{
      this._datosDepartamentos = data;
    })
  }
}
