import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IRdv} from 'src/app/rdv';
import {Observable} from 'rxjs';
import {Rdv} from '../models/model.rdv';
import {Thematique} from '../models/model.thematique';
import {  HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Injectable()
export class RdvService {

  private url: string = 'http://localhost:8082/getAllRdvDateTime';
  private url2: string = 'http://localhost:8082/getAllRdvByIduser/';
  private url3: string = 'http://localhost:8082/getAllRdvByusername/';
  
//getAllRdvusermanagerDateTime
  private iduser: number = 1;  

  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) {
    this.iduser = 15;
    const headers = {
      'Authorization': 'Basic ' + btoa('devglan-client:devglan-secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    }
  }

 

  getRdv(id): Observable<IRdv[]> {

    if (this.iduser == id){
    return this.http.get<IRdv[]>(this.url2 + this.iduser + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);}
      else{          
      this.getRdvByIduser;
      }
  }
  
  
  getRdvByIduser(id): Observable<IRdv[]> {
    const httpOptions = {
      headers: new HttpHeaders({      
        'AUTHORIZATION': 'Bearer'  + this.tokenStorage.getToken()
      })
    };

    return this.http.get<IRdv[]>(this.url2 + id, httpOptions);
  }


  getRdvByUsername(username): Observable<IRdv[]> {
    const httpOptions = {
      headers: new HttpHeaders({      
        'AUTHORIZATION': 'Bearer'  + this.tokenStorage.getToken()
      })
    };


    console.log("urlgetRdvByUsername"+this.url3 +username);
    return this.http.get<IRdv[]>(this.url3 +username, httpOptions);
  }


   getRdvs() : Observable<Rdv[]>{
    console.log('Service => getRdvs');
    const httpOptions = {
      headers: new HttpHeaders({      
        'AUTHORIZATION': 'Bearer'  + this.tokenStorage.getToken()
      })
    };
    return this.http.get<Rdv[]>("http://localhost:8082/getAllRdvDateTime", httpOptions);
  }




  getRdvsByusermanager(usermanager) : Observable<Rdv[]>{
    console.log('Service => getRdvs');
    const httpOptions = {
      headers: new HttpHeaders({      
        'AUTHORIZATION': 'Bearer'  + this.tokenStorage.getToken()
      })
    };
    
    return this.http.get<Rdv[]>("http://localhost:8082/getAllRdvUsermanagerDateTime/"+usermanager, httpOptions);
  }

  getOneRdv(idRdv) : Observable<Rdv>{
    const httpOptions = {
      headers: new HttpHeaders({      
        'AUTHORIZATION': 'Bearer'  + this.tokenStorage.getToken()
      })
    };
    console.log('Service => getOneRdv');
    console.log(idRdv);
    return this.http.get<Rdv>("http://localhost:8082/getrdv/"+idRdv ,httpOptions);
  }

  saveRdv (rdv: Rdv) {
    const httpOptions = {
      headers: new HttpHeaders({      
        'AUTHORIZATION': 'Bearer'  + this.tokenStorage.getToken()
      })
    };
    console.log('Service => saveRdv');

    return this.http.post<Rdv>('http://localhost:8082/saveRdv', rdv,httpOptions);

  }

  deleteRdv(idRdv : number){
    const httpOptions = {
      headers: new HttpHeaders({      
        'AUTHORIZATION': 'Bearer'  + this.tokenStorage.getToken()
      })
    };
    return this.http.delete("http://localhost:8082/deleterdv/"+idRdv,httpOptions);
  }

  updateRdv(rdv : Rdv){
    console.log('Service => updateRdv');
    const httpOptions = {
      headers: new HttpHeaders({      
        'AUTHORIZATION': 'Bearer'  + this.tokenStorage.getToken()
      })
    };
    return this.http.put<Rdv>("http://localhost:8082/updateRdv", rdv,httpOptions);
  }


  updateEtatrdv(idrdv : number){
    console.log('Service => updateEtatRdv'+idrdv);

    const httpOptions = {
      headers: new HttpHeaders({      
        'AUTHORIZATION': 'Bearer'  + this.tokenStorage.getToken()
      })
    };
    return this.http.put<Rdv>("http://localhost:8082/updateEtatRdv", idrdv,httpOptions);
  }




  public print(idRdv : number): Observable<Blob>{
    console.log('printing service');
    //idRdv = 5;
    const httpOptions = {
      headers: new HttpHeaders({      
        'AUTHORIZATION': 'Bearer'  + this.tokenStorage.getToken()
      })
    };
    return this.http.get("http://localhost:8082/printreport/"+idRdv,{responseType: 'blob'});
  }

}
