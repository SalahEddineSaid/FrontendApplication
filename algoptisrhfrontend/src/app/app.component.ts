import { Component,AfterViewInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'algoptisrhfrontend';


constructor(private elementRef: ElementRef){
  
    }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fcfcfc';
    this.elementRef.nativeElement.ownerDocument.body.style.fontSize = '20px';
  }
}
