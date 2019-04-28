import { Component, OnInit , Output, Input,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rubrique',
  templateUrl: './rubrique.component.html',
  styleUrls: ['./rubrique.component.css']
})
export class RubriqueComponent implements OnInit {
  
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
