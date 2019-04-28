import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {RdvService} from '../../../../services/rdv.service';
import {User} from '../../../../models/model.user';
import {Thematique} from '../../../../models/model.thematique';
import {EmployeeService} from '../../../../services/employee.service';
import {ThematiqueService} from '../../../../services/thematique.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
@Component({
  selector: 'app-admin-ajouter-rdv',
  templateUrl: './admin-ajouter-rdv.component.html',
  styleUrls: ['./admin-ajouter-rdv.component.css']
})
export class AdminAjouterRdvComponent implements OnInit {

  public users : User[];
  public thematiques : Thematique[];
  constructor(public http:HttpClient,
              public rdvService:RdvService,
              public employeeService:EmployeeService,
              public thematiqueService:ThematiqueService,
              public router:Router
              ,private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.thematiqueService.getThematiques().subscribe(
      data => {
        this.thematiques = data;
      }, err => {
        console.log(err);
      })

    this.employeeService.getusersbyusernamemanager(this.tokenStorage.getUsername()).subscribe(
      data => {
        this.users = data;
      }, err => {
        console.log(err);
      })
  }

  onSaveRdv(dataForm){
    console.log(dataForm);

    this.rdvService.saveRdv(dataForm)
      .subscribe(data=>{
        console.log(data);
        alert(" rendez vous crée avec succés");
      },err=>{
        console.log(JSON.parse(err._body).message);
      })
  }

  returnToList(){
    this.router.navigate(['admin-rdvs']);
  }

}
