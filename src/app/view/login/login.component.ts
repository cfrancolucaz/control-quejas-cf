import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/model/usuario.model';
import { WebServices } from 'src/app/service/web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  public usuario= new Usuario();

  constructor(private service:WebServices,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  ingresar(){

    if(this.usuario.user != '' && this.usuario.password != '' ){
      this.service.getLogin(this.usuario.user,this.usuario.password).subscribe(data=>{

        if(data[0]){
          this.service.login(data[0]);
        }else{
          this.snackBar.open('Usuario o Contraseña no correcta, verifique', '', {
            duration: 4000,
          });
        }
      })
    }else{
      this.snackBar.open('Usuario o Contraseña requerida', '', {
        duration: 4000,
      });
    }
    
  }

}
