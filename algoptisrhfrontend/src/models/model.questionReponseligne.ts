import {Rubrique} from './model.rubrique';
import {TypeQuestion} from './model.typeQuestion';
import {Rdv} from './model.rdv';

export class QuestionReponseligne{
  idquestreponse : number;
  question : string ="";
  reponse : string ="";
  reponseManager : string ="";
  description : string ="";
  rubrique : Rubrique = new Rubrique();
  typeQuestion : TypeQuestion = new TypeQuestion();
  rdv:Rdv=new Rdv();
}
