import DateTimeFormat = Intl.DateTimeFormat;
import {User} from './model.user';
import {Thematique} from './model.thematique';


export class Rdv{
  idrdv : number;
  datetime : DateTimeFormat = new DateTimeFormat();
  etat : boolean = false;
  user : User = new User();
  thematique : Thematique = new Thematique();
}
