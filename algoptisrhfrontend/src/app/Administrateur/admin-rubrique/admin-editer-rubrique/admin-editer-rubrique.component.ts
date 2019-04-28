import {Component, OnInit } from '@angular/core';
import {Thematique} from '../../../../models/model.thematique';
import {Rubrique} from '../../../../models/model.rubrique';
import {ActivatedRoute, Router} from '@angular/router';
import {RubriqueService} from '../../../../services/rubrique.service';
import {ThematiqueService} from '../../../../services/thematique.service';

@Component({
  selector: 'app-admin-editer-rubrique',
  templateUrl: './admin-editer-rubrique.component.html',
  styleUrls: ['./admin-editer-rubrique.component.css']
})
export class AdminEditerRubriqueComponent implements OnInit {

  thematiqueList : Array<Thematique> = [];
  rubrique:Rubrique = new Rubrique();
  idRubrique:number;

  constructor(public activatedRoute:ActivatedRoute,
              public rubriqueService : RubriqueService,
              public thematiqueService : ThematiqueService,
              public router:Router) {
    this.idRubrique=activatedRoute.snapshot.params['idrubrique'];
  }

  ngOnInit() {
    this.rubriqueService.getRubrique(this.idRubrique)
      .subscribe(data=>{
        this.rubrique=data;
      },err=>{
        console.log(err);
      });
    this.thematiqueService.getThematiques().subscribe(
      data => {
        this.thematiqueList = data;
      }, err => {
        console.log(err);
      });
  }

  updateRubrique(){
    this.rubriqueService.updateRubrique(this.rubrique)
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
    this.router.navigate(['admin-rubriques']);
  }

}
