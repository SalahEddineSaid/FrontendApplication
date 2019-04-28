import { Component, OnInit,ViewChild } from '@angular/core';
import {User} from '../../../models/model.user';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {EmployeeService} from '../../../services/employee.service';
import {Role} from '../../../models/model.role';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  public userList : Array<User> = [];

  dataSource :any;
  displayedColumns: string[] = ['username', 'email', 'usernamemanager','actions'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public http:HttpClient,
              public userService:EmployeeService,
              public router:Router) {}


              
  ngOnInit() {
    
    this.userService.getUsers().subscribe(
      data => {
        this.userList = data;
        this.dataSource = new MatTableDataSource<User>(this.userList);
        
      
      }, err => {
        console.log(err);
      },()=>{
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
   //   this.dataSource.paginator = this.paginator; 
     }

     applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }


  onAddUser(){
    console.log('onAddUser');
    this.router.navigate(['admin-ajouter-user']);
  }

  onDeleteUser(user:User){
    let confirm=window.confirm('Est vous sur ?');
    if(confirm==true){
      console.log(user.id);
      this.userService.deleteUser(user.id)
        .subscribe(data=>{
          this.userList.splice(this.userList.indexOf(user),1);
        },err=>{
          console.log(err);
        })
    }
  }

  onEditUser(id:number){
    console.log('onEditUser'+id);

    this.router.navigate(['admin-editer-user/',{id}]);
  }

}
