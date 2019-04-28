import { Component, OnInit } from '@angular/core';
import {Rubrique} from '../../../../models/model.rubrique';
import {HttpClient} from '@angular/common/http';
import {QuestionRepService} from '../../../../services/questionRep.service';
import {RubriqueService} from '../../../../services/rubrique.service';
import {Router} from '@angular/router';
import {TypeQuestionService} from '../../../../services/typeQuestion.service';
import {TypeQuestion} from '../../../../models/model.typeQuestion';

@Component({
  selector: 'app-admin-ajouter-question-reponse',
  templateUrl: './admin-ajouter-question.component.html',
  styleUrls: ['./admin-ajouter-question.component.css']
})
export class AdminAjouterQuestionComponent implements OnInit {
  public rubriqueList : Array<Rubrique> = [];
  public typeQuestionList : Array<TypeQuestion> = [];


  constructor(public http:HttpClient,
              public questionReponseService:QuestionRepService,
              public typeQuestionService:TypeQuestionService,
              public rubriqueService:RubriqueService,
              public router:Router) { }

  ngOnInit() {
    this.rubriqueService.getRubriques().subscribe(
      data => {
        this.rubriqueList = data;
      }, err => {
        console.log(err);
      });
    this.typeQuestionService.getTypeQuestions().subscribe(
      data => {
        this.typeQuestionList = data;
      }, err => {
        console.log(err);
      });
  }

  onSaveQuestion(dataForm){

        console.log(dataForm);
        this.questionReponseService.saveQuestionReponse(dataForm)
          .subscribe(data=>{
            console.log(data);
          },err=>{
            console.log(JSON.parse(err._body).message);
          })
      }

  returnToList(){
    this.router.navigate(['admin-questions']);
  }


}
