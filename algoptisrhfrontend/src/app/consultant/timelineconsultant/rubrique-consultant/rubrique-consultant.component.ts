
import { Component, OnInit , Output, Input,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rubrique-consultant',
  templateUrl: './rubrique-consultant.component.html',
  styleUrls: ['./rubrique-consultant.component.css']
})
export class RubriqueConsultantComponent implements OnInit {
  
  private hidden : boolean = false;
  
    @Output() msgEvent = new EventEmitter<boolean>();
    @Output() idEvent = new EventEmitter<number>();
    @Input() rubrique;
  
  
  
    constructor() { }
  
    ngOnInit() {
    }
  
    showQuestion(idrubrique){
      console.log("rubrique:"+this.rubrique.idrubrique+"hid"+this.hidden+"idrubrique"+idrubrique);
     this.idEvent.emit(idrubrique);
      this.msgEvent.emit(this.hidden);
    }





}
