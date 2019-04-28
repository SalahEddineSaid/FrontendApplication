import {Role} from './model.role';

export class User{
  id : number;
  username : string = "";
  email : string = "";
  password : string = "";
  actived : string = "";
  type : string = "";
  idManager : number;
  usernamemanager: string="";
  role : Role = new Role();
  name: string;



  

  

}
