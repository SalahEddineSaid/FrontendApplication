import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Rdv} from '../../../../models/model.rdv';
import {RdvService} from '../../../../services/rdv.service';
import {EmployeeService} from '../../../../services/employee.service';
import {ThematiqueService} from '../../../../services/thematique.service';
import {User} from '../../../../models/model.user';
import {Thematique} from '../../../../models/model.thematique';

@Component({
  selector: 'app-admin-editer-rdv',
  templateUrl: './admin-editer-rdv.component.html',
  styleUrls: ['./admin-editer-rdv.component.css']
})
export class AdminEditerRdvComponent implements OnInit {

  public users : User[];
  public thematiques : Thematique[];
  rdv:Rdv = new Rdv();
  idRdv:number;
  constructor(public activatedRoute:ActivatedRoute,
              public rdvService: RdvService,
              public employeeService:EmployeeService,
              public thematiqueService:ThematiqueService,
              public router:Router) {
    this.idRdv=activatedRoute.snapshot.params['idrdv'];
  }

  ngOnInit() {
    console.log(this.idRdv)
    this.rdvService.getOneRdv(this.idRdv)
      .subscribe(data=>{
        this.rdv=data;
      },err=>{
        console.log(err);
      });

    this.thematiqueService.getThematiques().subscribe(
      data => {
        this.thematiques = data;
      }, err => {
        console.log(err);
      });

    this.employeeService.getUsers().subscribe(
      data => {
        this.users = data;
      }, err => {
        console.log(err);
      });
  }

  updateRdv(){
    console.log(this.rdv);
    console.log(this.rdv.user);
    console.log(this.rdv.thematique);
    this.rdvService.updateRdv(this.rdv)
      .subscribe(data=>{
        console.log(data);
        //alert("Mise à jour éffectuée");
        //this.router.navigate(['admin-thematiques']);
      },err=>{
        console.log(err);
        alert("Problème :"+err);
      })
  }

  returnToList(){
    this.router.navigate(['admin-rdvs']);
  }

}
