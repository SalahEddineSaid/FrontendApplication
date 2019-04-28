import { Component, OnInit } from '@angular/core';
import {Rdv} from '../../../../models/model.rdv';
import {Thematique} from '../../../../models/model.thematique';
import {HttpClient} from '@angular/common/http';
import {RubriqueService} from '../../../../services/rubrique.service';
import {ThematiqueService} from '../../../../services/thematique.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-ajouter-rubrique',
  templateUrl: './admin-ajouter-rubrique.component.html',
  styleUrls: ['./admin-ajouter-rubrique.component.css']
})
export class AdminAjouterRubriqueComponent implements OnInit {

  thematiqueList : Array<Thematique> = [];

  constructor(public http:HttpClient,
              public rubriqueService:RubriqueService,
              public thematiqueService:ThematiqueService,
              public router:Router) { }

  ngOnInit() {
    this.thematiqueService.getThematiques().subscribe(
      data => {
        this.thematiqueList = data;
      }, err => {
        console.log(err);
      })
  }

  onSaveRubrique(dataForm){

    console.log(dataForm);
    this.rubriqueService.saveRubrique(dataForm)
       .subscribe(data=>{
         console.log(data);
       },err=>{
         console.log(JSON.parse(err._body).message);
       })
  }

  returnToList(){
    this.router.navigate(['admin-rubriques']);
  }


}
