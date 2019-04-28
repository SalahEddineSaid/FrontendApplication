
import { Component, OnInit , Output, Input,  EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import {QuestionRepService} from '../../../../../services/questionRep.service';


@Component({
  selector: 'app-questionreponse',
  templateUrl: './questionreponse.component.html',
  styleUrls: ['./questionreponse.component.css']
})
export class QuestionreponseComponent {



  @Input() selectRubrique;
  @Input() idrubriquetimeline;
  @Input() idrdv;

@Input() nomutilisateur;
  QuestRepList=[];
nameuser:string;
nameusere:string='aa';
  private hidden : boolean = true;
  numberqst:number;
  messageqst:string;
  

  @Output() msgEvent = new EventEmitter<boolean>();

  options2 = [1,2,3,4,5,6,7,8,9,10]
  options1 = [1,2,3,4,5]


  constructor(private questionRepService:QuestionRepService) {
    this.nameuser=this.nomutilisateur;
  }

  ngOnInit() {

this.nameuser=this.nomutilisateur;


/*
    this.questionRepService.getListQuestionReponseByrubrique(this.idrubriquetimeline)
      .subscribe(data => {
        this.QuestRepList = data;
        console.log("question"+this.QuestRepList);
      });

      */

      this.questionRepService.getListQuestionReponseByrubriqueclone(this.idrubriquetimeline,this.idrdv)
      .subscribe(data => {
        this.QuestRepList = data;
        this.numberqst=this.QuestRepList.length;
        if(this.numberqst==0){this.messageqst="les questions de cette rubrique ne sont pas encore programmées"}
        console.log("nomberQueston"+this.numberqst);
        console.log("this.messageqst="+this.messageqst);
      //  console.log("questionclone"+this.QuestRepList);
      },
      err=>{
        console.log(err);
      },
      ()=>{
        this.numberqst=this.QuestRepList.length;
        if(this.numberqst==0)
        {this.messageqst="les questions de cette rubrique ne sont pas encore programmées"}
     
   //    this.showTimeline();
      }
    );
      this.idrdv=null;
      
  }

  showTimeline(){
    this.msgEvent.emit(this.hidden);
  }

 /* ngOnChanges(changes: SimpleChanges) {
    const selectRubrique: SimpleChange = changes.selectRubrique;


    console.log("idrub"+this.selectRubrique);

    console.log("if" + this.selectRubrique.idrubrique);

    this.questionRepService.getQuestionReponseByrubrique(this.selectRubrique.idrubrique)
    this.questionRepService.getQuestionReponseByrubrique(1)
      .subscribe(data => {
        this.QuestRepList = data;
        console.log(this.QuestRepList);
      });

  }

*/

/*
updateQuestion(){
  this.questionRepService.updateListQuestionReponse(this.QuestRepList)
    .subscribe(data=>{
   //   console.log(data);
      alert("Mise à jour éffectuée");
      // this.router.navigate(['admin-questions']);
    },err=>{
    //  console.log(err);
      alert("Problème :"+err);
    });

}
*/

updateQuestion(){
  this.questionRepService.updateListQuestionReponseclone(this.QuestRepList)
    .subscribe(data=>{
   //   console.log(data);
      alert("Mise à jour éffectuée");
      // this.router.navigate(['admin-questions']);
    },err=>{
    //  console.log(err);
      alert("Problème :"+err);
    });

}




}
