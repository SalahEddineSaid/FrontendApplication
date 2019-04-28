import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Thematique} from '../../../../models/model.thematique';
import {ThematiqueService} from '../../../../services/thematique.service';



@Component({
  selector: 'app-admin-editer-thematique',
  templateUrl: './admin-editer-thematique.component.html',
  styleUrls: ['./admin-editer-thematique.component.css']
})
export class AdminEditerThematiqueComponent implements OnInit {
  //mode:number=1;
  thematique:Thematique = new Thematique();
  idThematique:number;
  constructor(public activatedRoute:ActivatedRoute,
              public thematiqueService: ThematiqueService,
              public router:Router) {
    this.idThematique=activatedRoute.snapshot.params['idthematique'];
  }

  ngOnInit() {
    this.thematiqueService.getThematique(this.idThematique)
      .subscribe(data=>{
        this.thematique=data;
      },err=>{
        console.log(err);
      })
  }

  updateThematique(){
    console.log(this.thematique);
    this.thematiqueService.updateThematique(this.thematique)
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
    this.router.navigate(['admin-thematiques']);
  }

}
