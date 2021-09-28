import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Comercios } from 'src/app/model/comercios.model';
import { Municipios } from 'src/app/model/municipios.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styleUrls: ['./comercios.component.css']
})
export class ComerciosComponent implements OnInit {

  public _datos:Comercios[]= [];
  public _datosMunicipios:Municipios[]= [];
  public municipiosId:number=0;

  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { 
    this.service.validaLogin()
    this.buscar();
  }

  ngOnInit(): void {
    this.setFiltros()
  }


  buscar(){
    if(this.municipiosId != undefined && this.municipiosId>0){
      this.service.getComerciosMunicipioId(this.municipiosId).subscribe(data =>{
        this._datos=data;
      })
    }else{
      this.service.getComercios().subscribe(data => {
        this._datos=data
 
      });
    }
    
  }

  grabar(){
    this.router.navigate(['./comerciostecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:Comercios){
    this.router.navigate(['./comerciostecleo',data.id], { relativeTo: this.rutaActiva });
  }

  eliminar(data:Comercios){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {
      
      this.service.deleteComercios(data).subscribe(()=>{
        this.buscar()
      })
    }
  }

  setFiltros(){
    this.service.getMunicipios().subscribe(data=>{
      this._datosMunicipios = data;
    })
  }


}
