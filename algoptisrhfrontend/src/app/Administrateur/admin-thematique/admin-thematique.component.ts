import { Component, OnInit,ViewChild } from '@angular/core';
import {Thematique} from '../../../models/model.thematique';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ThematiqueService} from '../../../services/thematique.service';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-thematique',
  templateUrl: './admin-thematique.component.html',
  styleUrls: ['./admin-thematique.component.css']
})
export class AdminThematiqueComponent implements OnInit {

  public thematiquesList : Array<Thematique> = [];
  dataSource :any;
  displayedColumns: string[] = ['code', 'libelle','actions'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public http:HttpClient, public thematiquesService:ThematiqueService,
              public router:Router) { }
             
  ngOnInit() {
    this.doSearch();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  doSearch(){
    this.thematiquesService.getThematiques().subscribe(
      data => {
        this.thematiquesList = data;

        this.dataSource = new MatTableDataSource<Thematique>(this.thematiquesList);
        
      }, err => {
        console.log(err);
      },()=>{
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  onAddThematique(){
    console.log('onAddThematique');
    this.router.navigate(['admin-ajouter-thematique']);
  }

  onDeleteThematique(thematique:Thematique){
    let confirm=window.confirm('Est vous sur ?');
    if(confirm==true){
      console.log(thematique.idthematique);
      this.thematiquesService.deleteThematique(thematique.idthematique)
        .subscribe(data=>{
          this.thematiquesList.splice(this.thematiquesList.indexOf(thematique),1);
        },err=>{
          console.log(err);
        })
    }
  }

  onEditThematique(idthematique:number){
    console.log('onEditThematique'+idthematique);

    this.router.navigate(['admin-editer-thematique/',{idthematique}]);
  }
  returnToListGroupe(){
    this.router.navigate(['admin-rubriques']);
  }
}
