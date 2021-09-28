import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/model/usuario.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  hide = true;
  public usuario= new Usuario();

  constructor(private service:WebServices,private snackBar: MatSnackBar) {
    this.service.validaLogin()
   }

  ngOnInit(): void {
  }

  grabar(){
    if(this.usuario.user != '' && this.usuario.password != '' ){
    this.service.postUsuario(this.usuario).subscribe(data=>{
      this.snackBar.open('Usuario creado correctamente', '', {
        duration: 4000,
      });
      this.usuario = new Usuario();
    })
  }else{
    this.snackBar.open('Los campos usuarios y contraseña son requerido', '', {
      duration: 4000,
    });
  }
  }

}
