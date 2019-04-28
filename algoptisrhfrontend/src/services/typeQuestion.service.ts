import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {TypeQuestion} from '../models/model.typeQuestion';
import {  HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
@Injectable()
export class TypeQuestionService {

  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) {

  }

  getTypeQuestions() : Observable<TypeQuestion[]>{
    console.log('Service => getTypeQuestions');
    const httpOptions = {
      headers: new HttpHeaders({      
        'AUTHORIZATION': 'Bearer'  + this.tokenStorage.getToken()
      })
    };
    return this.http.get<TypeQuestion[]>("http://localhost:8082/getAllTypeQuestion",httpOptions);
  }

}
