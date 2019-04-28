import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmployee} from 'src/app/employee';
import {Observable} from 'rxjs';
import {User} from '../models/model.user';
import {Userregister} from '../models/model.userregister';

import {Role} from '../models/model.role';
import {Thematique} from '../models/model.thematique';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import {  HttpHeaders } from '@angular/common/http';
@Injectable()
export class EmployeeService {

  private url: string = 'http://localhost:8082/getalluser';
  private url2: string = 'http://localhost:8082/getusersbyrole/';
  private url3: string = 'http://localhost:8082/getusersbymanager/';

  
  private url4: string = 'http://localhost:8082/getusersbynamemanager/';
  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) {

  }

     getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url);

  }

  getUsers () : Observable<User[]> {
  return this.http.get<User[]>(this.url);
  }

  getusersbyidmanager(id:number):Observable<User[]>{
    
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': 'Bearer'  + this.tokenStorage.getToken()
      })
    };

    console.log("this.tokenStorage.getToken()="+this.tokenStorage.getToken())
    console.log("httpOption="+httpOptions.headers);
    console.log('url3:= ' + this.url3 + id);
       return this.http.get<User[]>(this.url3+id,httpOptions);
     }



getusersbyusernamemanager(managername:string):Observable<User[]>{
    
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': 'Bearer'  + this.tokenStorage.getToken()
      })
    };
     console.log("usernameparameter"+ managername);
    console.log("this.tokenStorage.getToken()="+this.tokenStorage.getToken());
  
    console.log('url3:= ' + this.url4 + managername);
       return this.http.get<User[]>(this.url4+ managername,httpOptions);
     }
  //get manager
  getusersbyrole(id:number):Observable<User[]>{
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': 'Bearer'  + this.tokenStorage.getToken()
      })
    };

    return this.http.get<User[]>(this.url2+id,httpOptions );
  }

  getRoles () : Observable<Role[]> {

    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': 'Bearer'  + this.tokenStorage.getToken()
      })
    };

    console.log("urlroles"+ "http://localhost:8082/getallrole")
    return this.http.get<Role[]>('http://localhost:8082/getallrole',httpOptions);
  }

  saveUser (userregister: Userregister): Observable<string> {
    console.log('Service => saveUser');
    console.log("userrole"+userregister.rolename);
    console.log("usermanager"+userregister.usernamemanager);
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': 'Bearer'  + this.tokenStorage.getToken()
      })
    };


    return this.http.post<string>('http://localhost:8082/saveuser', userregister,httpOptions);

  }

  updateUser(user : User){
    console.log('Service => updateUser');

    return this.http.put<User>("http://localhost:8082/updateUser", user+ '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  deleteUser(id : number){
    return this.http.delete("http://localhost:8082/deleteUser/"+id+ '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  getUser(id:number){
    return this.http.get<User>("http://localhost:8082/getUser/"+id+ '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
}
