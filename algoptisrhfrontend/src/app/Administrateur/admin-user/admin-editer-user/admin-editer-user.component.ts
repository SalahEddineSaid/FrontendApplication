import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../../../services/employee.service';
import {User} from '../../../../models/model.user';
import {Role} from '../../../../models/model.role';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-editer-user',
  templateUrl: './admin-editer-user.component.html',
  styleUrls: ['./admin-editer-user.component.css']
})
export class AdminEditerUserComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }
  
  roleList : Array<Role> = [];
  user:User = new User();
  id:number;

  constructor(public activatedRoute:ActivatedRoute,
              public userService : EmployeeService,
              public router:Router) {

    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.userService.getUser(this.id)
      .subscribe(data=>{
        this.user=data;
      },err=>{
        console.log(err);
      });
    this.userService.getRoles().subscribe(
      data => {
        this.roleList = data;
      }, err => {
        console.log(err);
      });
  }

  updateUser(){
    this.userService.updateUser(this.user)
      .subscribe(data=>{
        console.log(data);
        alert("Mise à jour éffectuée");
        //this.router.navigate(['admin-thematiques']);
      },err=>{
        console.log(err);
        alert("Problème :"+err);
      })
  }

  returnToList(){
    this.router.navigate(['admin-users']);
  }

}
