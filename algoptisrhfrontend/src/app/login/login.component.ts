import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService,public router:Router, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    console.log("tokon="+this.tokenStorage.getToken())
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
    
        this.isLoginFailed = false;
        this.isLoggedIn = true;
       
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
       
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
   
    console.log("role de user"+this.roles[0])
  
   if(this.roles[0] === "ROLE_ADMIN" || this.roles[0] === "ROLE_PM" ){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/consultant']);
      
    }
    
    
      //this.router.navigate(['/home']);
      //this.router.navigate(['/consultant']);
    
   // window.location.reload();
  }





  username: string;
  password: string;
   
    login() : void {
      if(this.username == 'admin' && this.password == 'admin'){
       this.router.navigate(["user"]);
      }else {
        alert("Invalid credentials");
      }
    }
    
}
