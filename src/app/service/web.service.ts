import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Comercios } from "../model/comercios.model";
import { Departamentos } from "../model/departamentos.model";
import { Municipios } from "../model/municipios.model";
import { Quejas } from "../model/quejas.model";
import { Regiones } from "../model/regiones.model";
import { Sucursales } from "../model/sucursales.model";
import { Usuario } from "../model/usuario.model";

@Injectable({
    providedIn: 'root'
  })
  export class WebServices {
  
    url = 'https://api-res-cf.herokuapp.com/api/';
  
    constructor(private http: HttpClient, private router: Router) { }
    
    //Usuarios
    getUsuarios() : Observable<Usuario[]>{
        return this.http.get<Usuario[]>(this.url+"usuarios");
    }

    getLogin(user:string,pass:string) : Observable<Usuario[]>{
        return this.http.get<Usuario[]>(this.url+"usuarios/"+user+"/"+pass);
    }
    
    postUsuario(usuario:Usuario):Observable<Usuario>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })

        return this.http.post<Usuario>(this.url+"usuarios",JSON.stringify(usuario),{headers: reqHeader})
    }

    putUsuario(usuario:Usuario) : Observable<Usuario>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })
        return this.http.put<Usuario>(this.url+"usuarios/"+usuario.id,JSON.stringify(usuario),{headers: reqHeader})
    }
    deleteUsuario(usuario:Usuario) : Observable<Usuario>{
        return this.http.delete<Usuario>(this.url+"usuarios/"+usuario.id)
    }


    //Regiones
    getRegiones() : Observable<Regiones[]>{
        return this.http.get<Regiones[]>(this.url+"regiones");
    }

    getRegionesId(id:number) : Observable<Regiones[]>{
        return this.http.get<Regiones[]>(this.url+"regiones/"+id);
    }

    postRegiones(data:Regiones): Observable<Regiones>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })

        return this.http.post<Regiones>(this.url+"regiones",JSON.stringify(data),{headers: reqHeader})

    }

    putRegiones(data:Regiones) : Observable<string>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })

        return this.http.put<string>(this.url+"regiones/"+data.id,JSON.stringify(data),{headers: reqHeader})
    }

    deleteRegiones(data:Regiones) : Observable<Regiones>{
        return this.http.delete<Regiones>(this.url+"regiones/"+data.id)
    }

    //Deparamentos
    getDepartamentos() : Observable<Departamentos[]>{
        return this.http.get<Departamentos[]>(this.url+"departamentos");
    }

    getDepartamentosId(id:number) : Observable<Departamentos[]>{
        return this.http.get<Departamentos[]>(this.url+"departamentos/"+id);
    }

    getDepartamentosRegionId(id:number) : Observable<Departamentos[]>{
        return this.http.get<Departamentos[]>(this.url+"departamentos/regiones/"+id);
    }

    postDepartamentos(data:Departamentos): Observable<Departamentos>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })

        return this.http.post<Departamentos>(this.url+"departamentos",JSON.stringify(data),{headers: reqHeader})

    }

    putDepartamentos(data:Regiones) : Observable<string>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })

        return this.http.put<string>(this.url+"departamentos/"+data.id,JSON.stringify(data),{headers: reqHeader})
    }

    deleteDepartamentos(data:Regiones) : Observable<Regiones>{
        return this.http.delete<Regiones>(this.url+"departamentos/"+data.id)
    }


    //Municipios
    getMunicipios() : Observable<Municipios[]>{
        return this.http.get<Municipios[]>(this.url+"municipios");
    }

    getMunicipioId(id:number) : Observable<Municipios[]>{
        return this.http.get<Municipios[]>(this.url+"municipios/"+id);
    }

    getMunicipiosDepartamentosId(id:number) : Observable<Municipios[]>{
        return this.http.get<Municipios[]>(this.url+"municipios/departamentos/"+id);
    }

    postMunicipio(data:Municipios): Observable<Municipios>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })

        return this.http.post<Municipios>(this.url+"municipios",JSON.stringify(data),{headers: reqHeader})

    }

    putMunicipio(data:Municipios) : Observable<string>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })

        return this.http.put<string>(this.url+"municipios/"+data.id,JSON.stringify(data),{headers: reqHeader})
    }

    deleteMunicipios(data:Municipios) : Observable<Municipios>{
        return this.http.delete<Municipios>(this.url+"municipios/"+data.id)
    }

    //Comercios
    getComercios() : Observable<Comercios[]>{
        return this.http.get<Comercios[]>(this.url+"comercios");
    }

    getComerciosId(id:number) : Observable<Comercios[]>{
        return this.http.get<Comercios[]>(this.url+"comercios/"+id);
    }

    getComerciosMunicipioId(id:number) : Observable<Comercios[]>{
        return this.http.get<Comercios[]>(this.url+"comercios/municipios/"+id);
    }

    postComercios(data:Comercios): Observable<Comercios>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })

        return this.http.post<Comercios>(this.url+"comercios",JSON.stringify(data),{headers: reqHeader})

    }

    putComercios(data:Comercios) : Observable<string>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })

        return this.http.put<string>(this.url+"comercios/"+data.id,JSON.stringify(data),{headers: reqHeader})
    }

    deleteComercios(data:Comercios) : Observable<string>{
        return this.http.delete<string>(this.url+"comercios/"+data.id)
    }


    //Sucursales
    getSucursales() : Observable<Sucursales[]>{
        return this.http.get<Sucursales[]>(this.url+"sucursales");
    }

    getSucursalId(id:number) : Observable<Sucursales[]>{
        return this.http.get<Sucursales[]>(this.url+"sucursales/"+id);
    }

    getSucursalRegionesId(id:number) : Observable<Sucursales[]>{
        return this.http.get<Sucursales[]>(this.url+"sucursales/regiones/"+id);
    }

    getSucursalDepartamentoId(id:number) : Observable<Sucursales[]>{
        return this.http.get<Sucursales[]>(this.url+"sucursales/departamentos/"+id);
    }

    getSucursalMunicipiosId(id:number) : Observable<Sucursales[]>{
        return this.http.get<Sucursales[]>(this.url+"sucursales/municipios/"+id);
    }

    getSucursalComerciosId(id:number) : Observable<Sucursales[]>{
        return this.http.get<Sucursales[]>(this.url+"sucursales/comercios/"+id);
    }

    postSucursal(data:Sucursales): Observable<Sucursales>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })

        return this.http.post<Sucursales>(this.url+"sucursales",JSON.stringify(data),{headers: reqHeader})

    }

    putSucursal(data:Sucursales) : Observable<string>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })

        return this.http.put<string>(this.url+"sucursales/"+data.id,JSON.stringify(data),{headers: reqHeader})
    }

    deleteSucursal(data:Sucursales) : Observable<string>{
        return this.http.delete<string>(this.url+"sucursales/"+data.id)
    }

    //Quejas

    getQuejas() : Observable<Quejas[]>{
        return this.http.get<Quejas[]>(this.url+"quejas");
    }

    getQuejasId(id:number) : Observable<Quejas[]>{
        return this.http.get<Quejas[]>(this.url+"quejas/"+id);
    }

    getQuejasRegionesId(id:number) : Observable<Quejas[]>{
        return this.http.get<Quejas[]>(this.url+"quejas/regiones/"+id);
    }

    getQuejasDepartamentoId(id:number) : Observable<Quejas[]>{
        return this.http.get<Quejas[]>(this.url+"quejas/departamentos/"+id);
    }

    getQuejasMunicipiosId(id:number) : Observable<Quejas[]>{
        return this.http.get<Quejas[]>(this.url+"quejas/municipios/"+id);
    }

    getQuejasComerciosId(id:number) : Observable<Quejas[]>{
        return this.http.get<Quejas[]>(this.url+"quejas/comercios/"+id);
    }

    getQuejasSucursalId(id:number) : Observable<Quejas[]>{
        return this.http.get<Quejas[]>(this.url+"quejas/sucursal/"+id);
    }

    postQuejas(data:Quejas): Observable<Quejas>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })

        return this.http.post<Quejas>(this.url+"quejas",JSON.stringify(data),{headers: reqHeader})

    }

    putQuejas(data:Quejas) : Observable<string>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          })

        return this.http.put<string>(this.url+"quejas/"+data.id,JSON.stringify(data),{headers: reqHeader})
    }

    deleteQuejas(data:Quejas) : Observable<string>{
        return this.http.delete<string>(this.url+"quejas/"+data.id)
    }

    //Verifica accesos
    getAccesos() {
        const token = sessionStorage.getItem('usuario') || '';
        return JSON.parse(token).access_token;
      }

      login(usuario:Usuario){
           let _usuario =  JSON.stringify(usuario);
          sessionStorage.setItem('usuario', _usuario);
          this.router.navigate(['graficas']);
      }
    
      logout() {
        sessionStorage.clear();
        this.router.navigate(['inicio']);
      }
    
      isLogin(){
        let token = sessionStorage.getItem('usuario');
        return token != null;
      }

      validaLogin(){
          if(!this.isLogin()){
                this.logout()
          }
      }
}

