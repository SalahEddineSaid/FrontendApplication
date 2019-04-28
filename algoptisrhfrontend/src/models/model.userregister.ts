

export class Userregister{
  id : number;
  username : string = "";
  email : string = "";
  password : string = "";
  actived : string = "";
  type : string = "";
  idManager : number;
  usernamemanager: string="";
  rolename:string="";
  name: string;



  constructor(name: string, username: string, email: string, password: string,usernamemanager:string,rolename:string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
   this.usernamemanager= usernamemanager;
   this.rolename = rolename;
   
}
  

  

}
