import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamentos } from 'src/app/model/departamentos.model';
import { Municipios } from 'src/app/model/municipios.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css']
})
export class MunicipiosComponent implements OnInit {

  public _datos:Municipios[]= [];
  public _datosDepartamentos:Departamentos[]= [];
  public departamentosId:number=0;

  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { 
    this.service.validaLogin()
    this.buscar();
  }

  ngOnInit(): void {
    this.setFiltros()
  }


  buscar(){
    if(this.departamentosId != undefined && this.departamentosId>0){
      this.service.getMunicipiosDepartamentosId(this.departamentosId).subscribe(data =>{
        this._datos=data;
      })
    }else{
      this.service.getMunicipios().subscribe(data => {
        this._datos=data
 
      });
    }
    
  }

  grabar(){
    this.router.navigate(['./municipiostecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:Municipios){
    this.router.navigate(['./municipiostecleo',data.id], { relativeTo: this.rutaActiva });
  }

  eliminar(data:Municipios){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {
      
      this.service.deleteMunicipios(data).subscribe(()=>{
        this.buscar()
      })
    }
  }

  setFiltros(){
    this.service.getDepartamentos().subscribe(data=>{
      this._datosDepartamentos = data;
    })
  }

}
