import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Regiones } from 'src/app/model/regiones.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {
  
  public regiones= new Regiones();
  public _datos:Regiones[]= [];

  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { 
    this.service.validaLogin()
    this.buscar();
  }

  ngOnInit(): void {
  }


  buscar(){
    this.service.getRegiones().subscribe(data => this._datos=data);
  }

  grabar(){
    this.router.navigate(['./regionestecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:Regiones){
    this.router.navigate(['./regionestecleo',data.id], { relativeTo: this.rutaActiva });
  }

  eliminar(data:Regiones){
    const respuesta = confirm("¿Esta seguro que desea eliminar el registro?. Ya no podra recuperarlo.");
    if (respuesta) {
      
      this.service.deleteRegiones(data).subscribe(()=>{
        this.buscar()
      })
    }
  }
}
