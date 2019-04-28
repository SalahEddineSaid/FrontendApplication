import { Component, OnInit } from '@angular/core';
import {ThematiqueService} from '../../../../services/thematique.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-ajouter-thematique',
  templateUrl: './admin-ajouter-thematique.component.html',
  styleUrls: ['./admin-ajouter-thematique.component.css']
})
export class AdminAjouterThematiqueComponent implements OnInit {

  constructor(public http:HttpClient,
              public thematiquesService:ThematiqueService,
              public router:Router) { }

  ngOnInit() {
  }

  onSaveThematique(dataForm){
    console.log(dataForm);

    this.thematiquesService.saveThematique(dataForm)
       .subscribe(data=>{
         console.log("Addthematique"+data);
       },err=>{
         console.log(JSON.parse(err._body).message);
       })
  }

  returnToList(){
    this.router.navigate(['admin-thematiques']);
  }



}
