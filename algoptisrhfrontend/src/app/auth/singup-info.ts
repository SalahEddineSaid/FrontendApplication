export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    role: string[];
    password: string;
    usernamemanager:string;


    constructor(name: string, username: string, email: string, password: string,usernamemanager:string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
       this.usernamemanager= usernamemanager;
       this.role = ['user'];
       //this.role=role;
    }
}
