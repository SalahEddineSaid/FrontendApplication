import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantRoutingModule } from './consultant-routing.module';
import { TimelineconsultantComponent } from './timelineconsultant/timelineconsultant.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule,
  MatInputModule, MatSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { QuestionReponseConsultantComponent } from './timelineconsultant/question-reponse-consultant/question-reponse-consultant.component';
import { RubriqueConsultantComponent } from './timelineconsultant/rubrique-consultant/rubrique-consultant.component';
import { NavconsultantComponent } from './navconsultant/navconsultant.component';
import { FOOTERconsultantComponent } from './footerconsultant/footerconsultant.component';



const routes: Routes = [
  {
    path: '',
    component: TimelineconsultantComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
 
  exports: [RouterModule],

  declarations: [TimelineconsultantComponent, QuestionReponseConsultantComponent, RubriqueConsultantComponent, NavconsultantComponent, FOOTERconsultantComponent]
})
export class ConsultantModule { }
