import { Component, OnInit } from '@angular/core';
import {QuestionReponse} from '../../../../models/model.questionReponse';
import {Rubrique} from '../../../../models/model.rubrique';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionRepService} from '../../../../services/questionRep.service';
import {RubriqueService} from '../../../../services/rubrique.service';
import {TypeQuestion} from '../../../../models/model.typeQuestion';
import {TypeQuestionService} from '../../../../services/typeQuestion.service';

@Component({
  selector: 'app-admin-editer-question-reponse',
  templateUrl: './admin-editer-question.component.html',
  styleUrls: ['./admin-editer-question.component.css']
})
export class AdminEditerQuestionComponent implements OnInit {
  questionReponse:QuestionReponse = new QuestionReponse();
  idQuestionReponse:number;

  public rubriqueList : Array<Rubrique> = [];
  public typeQuestionList : Array<TypeQuestion> = [];

  constructor(public activatedRoute:ActivatedRoute,
              public questionReponseService: QuestionRepService,
              public typeQuestionService:TypeQuestionService,
              public rubriqueService : RubriqueService,
              public router:Router) {
    this.idQuestionReponse=activatedRoute.snapshot.params['idquestreponse'];
  }

  ngOnInit() {
    this.questionReponseService.getQuestionReponse(this.idQuestionReponse)
      .subscribe(data=>{
        this.questionReponse=data;
      },err=>{
        console.log(err);
      });
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

  updateQuestion(){
    this.questionReponseService.updateQuestionReponse(this.questionReponse)
      .subscribe(data=>{
        console.log(data);
        alert("Mise à jour éffectuée");
       // this.router.navigate(['admin-questions']);
      },err=>{
        console.log(err);
        alert("Problème :"+err);
      })
  }

  returnToList(){
    this.router.navigate(['admin-questions']);
  }

}
