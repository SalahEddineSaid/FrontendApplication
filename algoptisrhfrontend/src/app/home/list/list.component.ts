import {Component, OnInit} from '@angular/core';
import {EmployeeService} from 'src/services/employee.service';
import {RdvService} from '../../../services/rdv.service';
import {IEmployee} from '../../employee';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private employees = [];
  private employeesname = [];
  private rdvByemployee = [];
  msglistconsultant:string="FF";
  usernamemanager:string;
  firstemployee:number;
   hidTimeline:boolean=false;
  constructor(private employeeService: EmployeeService,private tokenStorage: TokenStorageService) {


  }

  ngOnInit() {
    //idmanager
 /*console.log("tokenusename=="+ this.tokenStorage.getUsername());
   console.log("getuserbyidmanager");
    this.employeeService.getusersbyidmanager(5)
      .subscribe(data => {
        this.employees = data;
   
        console.log('dd' + this.employees);
      });
      */



      //this.usernamemanager=this.tokenStorage.getUsername().toString;
      this.employeeService.getusersbyusernamemanager(this.tokenStorage.getUsername())
      .subscribe(data => {
        this.employeesname = data;
      
        console.log('salah ya fa5er el arab allah 3ala a5le9ik :p' + this.employeesname);
       

      },err=>{
        console.log(err);
      },
      ()=>{
        if(this.employeesname.length==0){
          console.log("this.employeesname.length"+this.employeesname.length);
          
            this.msglistconsultant="aucun cunsultant ne vous a été affecté";
            console.log("msgconsultant"+this.msglistconsultant)
          }else{
          
            this.msglistconsultant="vvv";
            console.log("msgconsultant"+this.msglistconsultant)
          }
      }
    
  );




      


  }

  selectedEmployee:IEmployee;

  onselect(employee:IEmployee){
    console.log("employeeOO" + employee.id);
    this.hidTimeline=false;
    this.firstemployee=employee.id
    this.selectedEmployee=employee;

  this.hidTimeline=true;
  }








}
