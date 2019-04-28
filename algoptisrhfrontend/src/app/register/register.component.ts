import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/singup-info';
import {EmployeeService} from 'src/services/employee.service';
import {User} from 'src/models/model.user';
import {Role} from 'src/models/model.role';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  roleList : Array<Role> = [];
  
  rolee = ['admin', 'user', 'pm'];
  constructor(private authService: AuthService, public userService:EmployeeService) { }

  ngOnInit() { }

  onSubmit() {
    console.log("usenamemanagersingup"+this.form.usernamemanager);
    console.log("rollee"+this.form.role);
    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,  
      this.form.password,
      this.form.usernamemanager
     // this.form.role
    
    );


    this.userService.getRoles().subscribe(
      data => {
        this.roleList = data;
      }, err => {
        console.log(err);
      });
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);

        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}



/*import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/singup-info';
import {Router} from '@angular/router';
import {Role} from 'src/models/model.role';
import {User} from 'src/models/model.user';
import {EmployeeService} from 'src/services/employee.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

lllklé"
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  roleList : Array<Role> = [];
  listManager:Array<User>=[];
  constructor(private authService: AuthService,public userService:EmployeeService) { }
  
  ngOnInit() { 

    this.userService.getusersbyrole(1).subscribe(
      data=>{
        this.listManager=data;
        console.log("listemanager"+data);
      },err=>{
        console.log("liste manager err");
      }
    )

  }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,this.form.roleList);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
*/
