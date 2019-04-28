
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TimelineComponent } from './timeline.component';
import { QuestionreponseComponent } from './questionreponse/questionreponse.component';


const timelineRoutes :Routes=[

  {

    path:'timeline',
    component:TimelineComponent,
    children: [
      {
        path: 'questreponse/:id',
        component: QuestionreponseComponent
      }]

  }
]

export const timelineRouting:ModuleWithProviders=RouterModule.forChild(timelineRoutes);
