import { Component, OnInit } from '@angular/core';


import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";

import {ApiService} from 'src/services/ApiService.service'
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }
password:string;
username:string;
  addForm: FormGroup;
testpasswor:string;
  ngOnInit() {
    

  }

  onSubmit(dataform) {
this.testpasswor=this.password;
this.username=this.username;
    console.log("password"+this.testpasswor+"username"+this.username);
  
    this.apiService.createUser(dataform)
      .subscribe( data => {
        this.router.navigate(['home']);
      }), error => {
        alert("CANT ADD USER")
    };
    
  }

}