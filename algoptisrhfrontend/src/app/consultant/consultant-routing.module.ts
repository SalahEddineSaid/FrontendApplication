import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineconsultantComponent } from './timelineconsultant/timelineconsultant.component';



const routes: Routes = [
  {
    path: '',
    component: TimelineconsultantComponent
  }
];


export class ConsultantRoutingModule { }
