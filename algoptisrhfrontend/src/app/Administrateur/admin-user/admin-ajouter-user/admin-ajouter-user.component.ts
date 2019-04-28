import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {EmployeeService} from '../../../../services/employee.service';
import {User} from '../../../../models/model.user';
import {Role} from '../../../../models/model.role';
import {Userregister} from '../../../../models/model.userregister';

import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-admin-ajouter-user',
  templateUrl: './admin-ajouter-user.component.html',
  styleUrls: ['./admin-ajouter-user.component.css']
})

export class AdminAjouterUserComponent implements OnInit {
  
  email = new FormControl('', [Validators.required, Validators.email]);
  
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }
  
  form: any = {};
  hide = true;
  userList : Array<User> = [];
  roleList : Array<Role> = [];
  listManager:Array<User>=[];
  errorMessage = '';
  isSignUpFailed = false;
  userregister:Userregister;
  constructor(public http:HttpClient,
              public userService:EmployeeService,
              public router:Router) { }


              onSubmit() {
                console.log("usenamemanagersingup"+this.form.usernamemanager);
                console.log("rollee"+this.form.rolename);
                this.userregister = new Userregister(
                  this.form.name ,
                  this.form.username ,
                  this.form.email ,
                  this.form.password ,
                 this.form.usernamemanager,
                 this.form.rolename 
                
                );


                console.log("rolename::")
                console.log();
                this.userService.saveUser(this.userregister)
                  .subscribe(data=>{
                    console.log(data);
            
                    alert(" utilisateur crée avec succés");
                    this.isSignUpFailed = false;
                  },error=>{
                    this.errorMessage = error.error.message;
                    this.isSignUpFailed = true;
                  })

              }

              
  ngOnInit() {

    this.userService.getusersbyrole(2).subscribe(
      data=>{
        this.listManager=data;
        console.log("listemanager"+data);
      },err=>{
        console.log("liste manager err");
      }
    );

    this.userService.getUsers().subscribe(
      data => {
        this.userList = data;
      }, err => {
        console.log(err);
      });
    this.userService.getRoles().subscribe(
      data => {
        this.roleList = data;
      }, err => {
        console.log(err);
      });


     
  }

  onSaveUser(){

    
  }



  


  
  
  returnToList(){
    this.router.navigate(['admin-users']);
  }


}
