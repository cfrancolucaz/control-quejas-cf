import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router ,Params} from '@angular/router';
import { Regiones } from 'src/app/model/regiones.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-regionestecleo',
  templateUrl: './regionestecleo.component.html',
  styleUrls: ['./regionestecleo.component.css']
})
export class RegionestecleoComponent implements OnInit {

  id:number=0;
  public regiones = new  Regiones();
  
  constructor(private service:WebServices,private snackBar: MatSnackBar,private router: Router,public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);

  }

  public setData(data: Regiones) {
    this.regiones = data;
  }

  cerrar() {
    this.router.navigate(['/regiones'], { relativeTo: this.rutaActiva });
  }

  grabar(){

    if(this.regiones.id ==0){
      this.service.postRegiones(this.regiones).subscribe(data =>{
        this.snackBar.open('Registro grabado', '', {
          duration: 4000,
        });
        this.cerrar();
      })
    }else{
      this.service.putRegiones(this.regiones).subscribe(data =>{
        this.snackBar.open('Registro modificado', '', {
          duration: 4000,
        });
        this.cerrar();
      })
    }
    
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.getRegionesId(id).subscribe(data =>{
        this.regiones=data[0];
      })
    }
    
  }

}
