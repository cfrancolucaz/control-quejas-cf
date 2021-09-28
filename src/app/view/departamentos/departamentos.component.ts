import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamentos } from 'src/app/model/departamentos.model';
import { Regiones } from 'src/app/model/regiones.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  public cls= new Departamentos();
  public _datos:Departamentos[]= [];
  public _datosRegion:Regiones[]= [];
  public regionesId:number=0;

  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { 
    this.service.validaLogin()
    this.buscar();
  }

  ngOnInit(): void {
    this.setFiltros()
  }


  buscar(){
    if(this.regionesId != undefined && this.regionesId>0){
      this.service.getDepartamentosRegionId(this.regionesId).subscribe(data =>{
        this._datos=data;
      })
    }else{
      this.service.getDepartamentos().subscribe(data => {
        this._datos=data
 
      });
    }
    
  }

  grabar(){
    this.router.navigate(['./departamentostecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:Departamentos){
    this.router.navigate(['./departamentostecleo',data.id], { relativeTo: this.rutaActiva });
  }

  eliminar(data:Departamentos){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {
      
      this.service.deleteDepartamentos(data).subscribe(()=>{
        this.buscar()
      })
    }
  }

  setFiltros(){
    this.service.getRegiones().subscribe(data=>{
      this._datosRegion = data;
    })
  }

}
