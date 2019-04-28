import {QuestionReponse} from '../../../models/model.questionReponse';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {QuestionRepService} from '../../../services/questionRep.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-questions-reponses',
  templateUrl: './admin-question.component.html',
  styleUrls: ['./admin-question.component.css']
})
export class AdminQuestionComponent implements OnInit {

  public questionReponseList : Array<QuestionReponse> = [];
  dataSource :any;
  displayedColumns: string[] = ['question', 'description', 'libelleRubrique','actions'];

  constructor(public http:HttpClient, public questionReponseService:QuestionRepService,
              public router:Router) { }
              @ViewChild(MatPaginator) paginator: MatPaginator;
              @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.doSearch();
  }

  doSearch(){
    this.questionReponseService.getQuestionsReponses().subscribe(
      data => {
        this.questionReponseList = data;

        this.dataSource = new MatTableDataSource<QuestionReponse>(this.questionReponseList);
        
      }, err => {
        console.log(err);
      },()=>{
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  onAddQuestion(){
    console.log('onAddQuestion');
    this.router.navigate(['admin-ajouter-question']);
  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDeleteQuestion(qR:QuestionReponse){
    let confirm=window.confirm('Est vous sur ?');
    if(confirm==true){
      console.log(qR.idquestreponse);
      this.questionReponseService.deleteQuestionReponse(qR.idquestreponse)
        .subscribe(data=>{
          this.questionReponseList.splice(this.questionReponseList.indexOf(qR),1);
        },err=>{
          console.log(err);
        })
    }
  }

  onEditQuestion(idquestreponse:number){
    console.log('onEditQuestion '+idquestreponse);

    this.router.navigate(['admin-editer-question/',{idquestreponse}]);
  }

}
