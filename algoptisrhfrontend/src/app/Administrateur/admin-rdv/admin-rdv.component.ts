import { Component, OnInit,ViewChild } from '@angular/core';
import {Thematique} from '../../../models/model.thematique';
import {Rdv} from '../../../models/model.rdv';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {RdvService} from '../../../services/rdv.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import {MatChip,MatSort,MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-rdv',
  templateUrl: './admin-rdv.component.html',
  styleUrls: ['./admin-rdv.component.css']
})
export class AdminRdvComponent implements OnInit {

  public rdvList : Array<Rdv> = [];
  roles: string[] = [];


  dataSource :any;
  displayedColumns: string[] = ['datetime', 'username', 'libelleThematique','etat','actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public http:HttpClient, public rdvService:RdvService,
              public router:Router,private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.roles = this.tokenStorage.getAuthorities()
    this.doSearch();
  }

  doSearch(){
    
   if(this.roles[0]=="ROLE_ADMIN"){
   

    this.rdvService.getRdvs().subscribe(
      data => {
        this.rdvList = data;
        this.dataSource = new MatTableDataSource<Rdv>(this.rdvList);
        
        console.log( "list rdv"+this.rdvList);
      }, err => {
        console.log(err);
      },()=>{
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    } if(this.roles[0]=="ROLE_PM" ){

      console.log("role"+this.roles[0]+"username"+this.tokenStorage.getUsername())
      this.rdvService.getRdvsByusermanager(this.tokenStorage.getUsername()).subscribe(
        data => {
          this.rdvList = data;
          this.dataSource = new MatTableDataSource<Rdv>(this.rdvList);
          
          console.log( "list rdv usermanager"+this.rdvList);
        }, err => {
          console.log(err);
        },()=>{
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })


    }



  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAddRdv(){
    console.log('onAddRdv');
    this.router.navigate(['admin-ajouter-rdv']);
  }

  onDeleteRdv(rdv:Rdv){
    let confirm=window.confirm('Est vous sur ?');
    if(confirm==true){
      console.log(rdv.idrdv);
      this.rdvService.deleteRdv(rdv.idrdv)
        .subscribe(data=>{
          this.rdvList.splice(this.rdvList.indexOf(rdv),1);
        },err=>{
          console.log(err);
        })
    }
  }

  onEditRdv(idrdv:number){
    console.log('onEditRdv'+idrdv);

    this.router.navigate(['admin-editer-rdv/',{idrdv}]);
  }

}
