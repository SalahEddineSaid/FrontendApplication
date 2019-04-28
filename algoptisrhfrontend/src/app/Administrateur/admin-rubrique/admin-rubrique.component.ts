import {Rubrique} from '../../../models/model.rubrique';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {RubriqueService} from '../../../services/rubrique.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-rubrique',
  templateUrl: './admin-rubrique.component.html',
  styleUrls: ['./admin-rubrique.component.css']
})
export class AdminRubriqueComponent implements OnInit {

  public rubriqueList : Array<Rubrique> = [];
  dataSource :any;
  displayedColumns: string[] = ['codeRubrique', 'libelleRubrique', 'libelleThematique','actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public http:HttpClient,public rubriqueService:RubriqueService,
              public router:Router) { }

  ngOnInit() {
    this.rubriqueService.getRubriques().subscribe(
      data => {
        this.rubriqueList = data;

        this.dataSource = new MatTableDataSource<Rubrique>(this.rubriqueList);
      }, err => {
        console.log(err);
      },()=>{
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAddRubrique(){
    console.log('onAddRubrique');
    this.router.navigate(['admin-ajouter-rubrique']);
  }

  onDeleteRubrique(rubrique:Rubrique){
    let confirm=window.confirm('Est vous sur ?');
    if(confirm==true){
      console.log(rubrique.idrubrique);
      this.rubriqueService.deleteRubrique(rubrique.idrubrique)
        .subscribe(data=>{
          this.rubriqueList.splice(this.rubriqueList.indexOf(rubrique),1);
        },err=>{
          console.log(err);
        })
    }
  }

  onEditRubrique(idrubrique:number){
    console.log('onEditRubrique'+idrubrique);

    this.router.navigate(['admin-editer-rubrique/',{idrubrique}]);
  }

}
