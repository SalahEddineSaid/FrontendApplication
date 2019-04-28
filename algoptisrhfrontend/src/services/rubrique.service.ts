import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rubrique} from '../models/model.rubrique';

@Injectable({
  providedIn: 'root'
})
export class RubriqueService {

  constructor(private http: HttpClient) { }
 
  getRubriques() : Observable<Rubrique[]>{
    return this.http.get<Rubrique[]>("http://localhost:8082/getAllRubrique");
  }

  getRubriquesByThematique(idthematique) : Observable<Rubrique[]>{
    return this.http.get<Rubrique[]>("http://localhost:8082/getrubriquebythematique/"+idthematique);
  }

  saveRubrique (rubrique: Rubrique) {
    return this.http.post<Rubrique>("http://localhost:8082/saveRubrique", rubrique);
  }

  updateRubrique(rubrique : Rubrique){
    return this.http.put<Rubrique>("http://localhost:8082/updateRubrique", rubrique);
  }

  deleteRubrique(idRubrique : number){
    return this.http.delete("http://localhost:8082/deleteRubrique/"+idRubrique);
  }

  getRubrique(idrubrique:number){
    return this.http.get<Rubrique>("http://localhost:8082/getrubrique/"+idrubrique);
  }

}
