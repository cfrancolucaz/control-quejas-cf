import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamentos } from 'src/app/model/departamentos.model';
import { Quejas } from 'src/app/model/quejas.model';
import { Regiones } from 'src/app/model/regiones.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-filtroquejas',
  templateUrl: './filtroquejas.component.html',
  styleUrls: ['./filtroquejas.component.css']
})
export class FiltroquejasComponent implements OnInit {
  public _datos:Quejas[]= [];

  public _datosRegion:Regiones[]= [];
  public regionesId:number=0;

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
      this.service.getQuejasDepartamentoId(this.departamentosId).subscribe(data =>{
        this._datos=data;
      })
    }else if(this.regionesId != undefined && this.regionesId>0){
      this.service.getQuejasRegionesId(this.regionesId).subscribe(data =>{
        this._datos=data;
      })
    }else{
      this.service.getQuejas().subscribe(data => {
        console.log(data)
        this._datos=data
 
      });
    }
    
  }
 
  setFiltros(){
    this.service.getRegiones().subscribe(data=>{
      this._datosRegion = data;
    })
  }

  selectionChangeRegion(){
    if(this.regionesId !=undefined && this.regionesId >0){
      this.service.getDepartamentosRegionId(this.regionesId).subscribe(data=>{
        this._datosDepartamentos = data
      })
    }
   
  }

}
