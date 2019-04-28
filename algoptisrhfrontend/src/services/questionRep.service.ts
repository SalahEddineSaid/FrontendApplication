import {Injectable} from '@angular/core';

import {IQuestionRep} from 'src/app/questionRep';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {QuestionReponse} from '../models/model.questionReponse';
import {QuestionReponseligne} from '../models/model.questionReponseligne';




@Injectable()
export class QuestionRepService {


  private url: string = 'http://localhost:8082/getAllQuestionReponsebyRubrique/';

  constructor(private http: HttpClient) {

  }

  getQuestionReponseByrubrique(id): Observable<IQuestionRep[]> {
    return this.http.get<IQuestionRep[]>(this.url + id);

  }

  getListQuestionReponseByrubrique(idRubrique): Observable<QuestionReponse[]> {
    console.log('ici c service getListQuestionReponseByrubrique');
    return this.http.get<QuestionReponse[]>("http://localhost:8082/getAllQuestionReponseByIdRubrique/" + idRubrique);

  }


  
  getListQuestionReponseByrubriqueclone(idRubrique,idrdv): Observable<QuestionReponse[]> {
    console.log('ici c service getListQuestionReponseByrubriqueclone');
    return this.http.get<QuestionReponse[]>("http://localhost:8082/getQuestionByidrubriqueclone/" + idRubrique +"/"+ idrdv);

  }



  getQuestionsReponses() : Observable<QuestionReponse[]>{
    console.log('Service => getQuestionsReponses');

    return this.http.get<QuestionReponse[]>("http://localhost:8082/getAllQuestionReponse");
  }

  saveQuestionReponse (questionReponse: QuestionReponse) {
    console.log('saveeeeeeeee');

    console.log(questionReponse);

    return this.http.post<QuestionReponse>("http://localhost:8082/saveQuestionreponse", questionReponse);

  }

  updateQuestionReponse(questionReponse : QuestionReponse){
    console.log('Service => updateQuestionReponse');

    return this.http.put<QuestionReponse>("http://localhost:8082/updateQuestion",questionReponse);
  }

  deleteQuestionReponse(idQuestionReponse : number){
    return this.http.delete("http://localhost:8082/deleteQuestion/"+idQuestionReponse);
  }

  getQuestionReponse(idQuestion:number){
    return this.http.get<QuestionReponse>("http://localhost:8082/getQuestion/"+idQuestion);
  }

  updateListQuestionReponse(listQuestionReponse : Array<QuestionReponse>){
    console.log('Service => updateQuestionReponse');

    return this.http.put<QuestionReponse>("http://localhost:8082/updateListQuestion",listQuestionReponse);
  }


  updateListQuestionReponseclone(listQuestionReponse : Array<QuestionReponseligne>){
    console.log('Service => QuestionReponseligne');

    return this.http.put<QuestionReponseligne>("http://localhost:8082/saveQuestionreponseclone",listQuestionReponse);
  }


}
