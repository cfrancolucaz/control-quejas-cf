import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamentos } from 'src/app/model/departamentos.model';
import { Regiones } from 'src/app/model/regiones.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-departamentostecleo',
  templateUrl: './departamentostecleo.component.html',
  styleUrls: ['./departamentostecleo.component.css']
})
export class DepartamentostecleoComponent implements OnInit {

  id:number=0;
  public cls = new  Departamentos();
  public _datosRegion:Regiones[]= [];
  
  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.setFiltros();
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);    
  } 

  cerrar() {
    this.router.navigate(['/departamentos'], { relativeTo: this.rutaActiva });
  }

  grabar(){

    if(this.cls.id ==0){
      this.service.postDepartamentos(this.cls).subscribe(data =>{
        this.snackBar.open('Registro grabado', '', {
          duration: 4000,
        });
        this.cerrar();
      })
    }else{
      this.service.putDepartamentos(this.cls).subscribe(data =>{
        this.snackBar.open('Registro modificado', '', {
          duration: 4000,
        });
        this.cerrar();
      })
    }
    
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.getDepartamentosId(id).subscribe(data =>{
        this.cls=data[0];      
      })
    }
    
  }

  setFiltros(){
    this.service.getRegiones().subscribe(data=>{
      this._datosRegion = data;
    })
  }
}
