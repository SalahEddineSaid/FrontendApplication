import {Rubrique} from './model.rubrique';
import {TypeQuestion} from './model.typeQuestion';

export class QuestionReponse{
  idquestreponse : number;
  question : string ="";
  reponse : string ="";
  reponseManager : string ="";
  description : string ="";
  rubrique : Rubrique = new Rubrique();
  typeQuestion : TypeQuestion = new TypeQuestion();
}
