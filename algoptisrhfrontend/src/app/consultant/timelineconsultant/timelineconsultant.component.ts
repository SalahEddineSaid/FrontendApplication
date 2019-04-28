
import { Component, OnInit , Output, Input,  EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import {RdvService} from 'src/services/rdv.service';
import {IRubrique} from 'src/app/rubrique';
import {RubriqueService} from 'src/services/rubrique.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import {ThematiqueService} from '../../../services/thematique.service';
@Component({
  selector: 'app-timelineconsultant',
  templateUrl: './timelineconsultant.component.html',
  styleUrls: ['./timelineconsultant.component.css']
})
export class TimelineconsultantComponent implements OnInit {
  etatrdv:boolean=false;
  private rubriqueliste = [];
  idrdv:number;
  private rdvDate = [];
  private hidden: boolean = true;
  idrubriquetimeline:number;
  selectRubrique: IRubrique;
  msgdv:string="";
  constructor(private rdvService: RdvService,
              private thematiquesService:ThematiqueService,private RubriqueService:RubriqueService,private tokenStorage: TokenStorageService) {
    console.log("consultant mod");
  }



  ngOnInit() {
    console.log("consultant mod");
    //idconsultant
    this.rdvService.getRdvByUsername(this.tokenStorage.getUsername()
    )
      .subscribe(data => {
        this.rdvDate = data;
        

       
      },err=>{
        console.log(err);
      },
      ()=>{
        if(this.rdvDate.length==0){
          console.log("this.employeesname.length"+this.rdvDate.length)
            this.msgdv="aucun rendez vous ne vous a été affecté";
          }else{
          
            this.msgdv="";
          }
      }
    
    
    
    
    );

   
  }



  onselectrubrique(rq){
    console.log("selectRubrique" + rq.idrubrique+ " " +"ccc");
  this.selectRubrique=rq;

  }



  receiveValue($event) {
    this.hidden = $event;
  }


  getIdrubrique(value){

    console.log("idruuuuuuuuuuuuuu="+value);
    this.idrubriquetimeline=value;


  }



  afficherubrique(idthematique,idrdv){
    this.idrdv=idrdv;

    console.log("zrzerezrzer="+idrdv);
        console.log("thematiqueid="+idthematique);
    
        this.RubriqueService.getRubriquesByThematique(idthematique)
        .subscribe(data => {
          this.rubriqueliste = data;
          console.log("this.rubriqueliste:"+this.rubriqueliste);     
          console.log("taille rubrique"+ this.rubriqueliste);
        
        });
        console.log("rubriqueid="+this.rubriqueliste);
        
       }

       /*
  public print(idThematique : number) : void{
    console.log('printing TS');
    this.thematiquesService.print(idThematique)
      .subscribe(x=>{
        var newBlob = new Blob([x], { type: "application/pdf" });
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }
        const data = window.URL.createObjectURL(newBlob);

        var link = document.createElement('a');
        link.href = data;
        link.download = "Document.pdf";
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        setTimeout(function () {
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      },err=>{
        console.log(JSON.parse(err._body).message);
      });
  }
  */
  public print(idrdv : number) : void{
    console.log('printing TS '+idrdv);
    this.rdvService.print(idrdv)
      .subscribe(x=>{
        var newBlob = new Blob([x], { type: "application/pdf" });
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }
        const data = window.URL.createObjectURL(newBlob);

        var link = document.createElement('a');
        link.href = data;
        link.download = "Document.pdf";
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        setTimeout(function () {
          // For Firefox it is necessary to delay revoking the ObjectURL
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      },err=>{
        console.log(JSON.parse(err._body).message);
      });
  }



  confirmerrdv(idrdv,rdvetat){
    
  if(rdvetat==false){
    this.etatrdv=true;
  }
  this.rdvService.updateEtatrdv(idrdv)
    .subscribe(data=>{
      console.log("datardv"+data);
      //alert("Mise à jour éffectuée");
      //this.router.navigate(['admin-thematiques']);
    },err=>{
      console.log(err);
      alert("etat n'a pas changé:"+err);
    })
    

  


}

}
