import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Comercios } from 'src/app/model/comercios.model';
import { Departamentos } from 'src/app/model/departamentos.model';
import { Municipios } from 'src/app/model/municipios.model';
import { Quejas } from 'src/app/model/quejas.model';
import { Sucursales } from 'src/app/model/sucursales.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.css'],
  providers:[DatePipe]
})
export class QuejasComponent implements OnInit {

  public cls = new Quejas();

  public _datosDepartamentos:Departamentos[]= [];
  public departamentosId:number=0;

  public _datosMunicipios:Municipios[]= [];
  public municipiosId:number=0;

  public _datosComercios:Comercios[]= [];
  public comerciosId:number=0;

  public _datosSucursales:Sucursales[]= [];
  public sucursalesId:number=0;

  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute,private  datePipe: DatePipe) { 

  }

  ngOnInit(): void {
    this.setFiltros()
  }

  grabar(){

    if(this.departamentosId >0 
      && this.municipiosId >0 
      && this.comerciosId >0
      && this.sucursalesId >0
      && this.cls.descripcion != ''
       ){

        
        
        this.service.getDepartamentosId(this.departamentosId).subscribe(data=>{
          
          this.cls.regionesId = data[0].regionesId
          this.cls.departamentosId = data[0].id 
          this.cls.municipiosId = this.municipiosId
          this.cls.comerciosId = this.comerciosId
          this.cls.sucursalId = this.sucursalesId
          this.cls.fecha = this.datePipe.transform(new Date(),"dd/MM/yyyy") || "01/01/2021"
          console.log(this.cls)
          this.service.postQuejas(this.cls).subscribe(data=>{
            this.snackBar.open('Queja grabada correctamente', '', {
              duration: 4000,
            });

            this.cls = new Quejas();

          })
        })
       }else{
        this.snackBar.open('Todos los campos son obligatorios, verifique.', '', {
          duration: 4000,
        });
       }
  

  }


  setFiltros(){
    this.service.getDepartamentos().subscribe(data=>{
      this._datosDepartamentos = data;
    })
  }

  selectionChangeDepartamento(){
    this.service.getMunicipiosDepartamentosId(this.departamentosId).subscribe(data=>{
      this._datosMunicipios = data;
    })
  }

  selectionChangeMunicipio(){
    this.service.getComerciosMunicipioId(this.municipiosId).subscribe(data=>{
      this._datosComercios = data;
    })
  }

  selectionChangeComercio(){
    this.service.getSucursalComerciosId(this.comerciosId).subscribe(data=>{
      this._datosSucursales = data;
    })
  }
}
