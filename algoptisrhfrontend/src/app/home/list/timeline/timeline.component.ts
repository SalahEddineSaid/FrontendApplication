import { Component, OnInit , Output, Input,  EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import {RdvService} from 'src/services/rdv.service';
import {IRubrique} from '../../../rubrique';
import {ThematiqueService} from '../../../../services/thematique.service';
import {RubriqueService} from '../../../../services/rubrique.service';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {

  private rdvDate = [];
  private rubriqueliste = [];
  private hidden: boolean = true;
  idrubriquetimeline:number;
  idrdv:number;
  selectRubrique: IRubrique;

  // msgconsultant:String=this.msglistconsultant;


  @Input() selectedEmployee;
  constructor(private rdvService: RdvService,
              private thematiquesService:ThematiqueService,private RubriqueService:RubriqueService) {
  }
    nomutilisateur:string;
    numberrdv:number;
    messagerdv:string;
   etatrdv:boolean=false;
    messageInitiale:string;
    @Input() lengthuser;

    ngOnInit() {


    

    

    this.messageInitiale="Veillez selctionne un consultant ";
    /*
    this.rdvService.getRdvByIduser(1)
    .subscribe(data => {
        this.rdvDate = data;

      });
      */





      
   }

   afficherubrique(idthematique,idrdv){
    this.idrdv=idrdv;
   // console.log("idrdvquestionreponse"+idrdv);
    //console.log("rubriqueid="+idthematique);
    this.RubriqueService.getRubriquesByThematique(idthematique)
    .subscribe(data => {
      this.rubriqueliste = data;
      //console.log("this.rubriqueliste:"+this.rubriqueliste);     
      // console.log("taille rubrique"+ this.rubriqueliste);
    });
    //console.log("rubriqueid="+this.rubriqueliste);
    
   }
  ngOnChanges(changes: SimpleChanges) {

    this.messageInitiale="";
    const selectedEmployee: SimpleChange = changes.selectedEmployee;
    this.nomutilisateur=this.selectedEmployee.username;
    //  console.log("if" + this.selectedEmployee.username+"ndomutilisateur1"+this.nomutilisateur);
    this.messagerdv="";
    if(this.selectedEmployee.id == null) {
      this.rdvService.getRdvByIduser(1
      )
        .subscribe(data => {
          //this.rdvDate = data;
          console.log("this.rdvDate:"+this.rdvDate);

          this.numberrdv=this.rdvDate.length;

          //  console.log("taille rdv"+ this.numberrdv);
          if(this.numberrdv==0){this.messagerdv="les rendez-vous de"+this.selectedEmployee.username+" pas encore programmées"}
          console.log("this.messagerdv"+this.messagerdv);
        });

    }else{
     // console.log("else" + this.selectedEmployee.id);
      this.rdvService.getRdvByIduser(this.selectedEmployee.id)
        .subscribe(data => {
          this.rdvDate = data;
        // console.log("this.rdvDate:"+this.rdvDate)
          this.numberrdv=this.rdvDate.length;
          //console.log("taille rdv"+ this.numberrdv);
        if(this.numberrdv==0)
        {this.messagerdv="les rendez-vous de"+this.selectedEmployee.username+" pas encore programmées"}
        console.log("this.messagerdv"+this.messagerdv);
      });

    }

  }

  onselectrubrique(rq){
   // console.log("selectRubrique" + rq.idrubrique+ " " +"ccc");
  this.selectRubrique=rq;

  }



  receiveValue($event) {
    this.hidden = $event;
  }


  getIdrubrique(value){
  
    //console.log("idruuuuuuuuuuuuuu="+value);
    this.idrubriquetimeline=value;
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



/*
  public print(idThematique : number) : void{
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

/*
  onClick(item) {
    Object.keys(this.hideme).forEach(h => {
      this.hideme[h] = false;
    });
    this.hideme[item.id] = true;
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


}
