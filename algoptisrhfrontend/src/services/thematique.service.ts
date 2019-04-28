import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Thematique} from '../models/model.thematique';
import {Observable} from 'rxjs';

@Injectable()
export class ThematiqueService{

  constructor(private http: HttpClient){
  }

  getThematiques() : Observable<Thematique[]>{
    console.log('Service => getThematiques');

    return this.http.get<Thematique[]>("http://localhost:8082/getAllthematiquee");
  }

  saveThematique (thematique: Thematique) {
    console.log('Service => saveThematique');

    console.log(thematique);

    return this.http.post<Thematique>('http://localhost:8082/saveThematique', thematique);

  }

  updateThematique(thematique : Thematique){
    console.log('Service => updateThematique');

    return this.http.put<Thematique>("http://localhost:8082/updateThematique", thematique);
  }

  deleteThematique(idthematique : number){
    return this.http.delete("http://localhost:8082/deletethematique/"+idthematique);
  }

  getThematique(idthematique:number){
    return this.http.get<Thematique>("http://localhost:8082/getthematique/"+idthematique);
  }



}
