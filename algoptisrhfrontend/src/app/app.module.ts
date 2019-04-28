import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from 'src/app/home/nav/nav.component';
import { ListComponent } from './home/list/list.component';
import { TimelineComponent } from './home/list/timeline/timeline.component';
import { EmployeeService } from 'src/services/employee.service';
import { QuestionRepService } from 'src/services/questionRep.service';
import { HttpClientModule } from '@angular/common/http';

import{AuthService} from 'src/app/auth/auth.service'
import { RdvService } from 'src/services/rdv.service';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ThematiqueComponent } from './thematique/thematique.component';
import { RubriqueComponent } from './home/list/timeline/rubrique/rubrique.component';
import { QuestionreponseComponent } from './home/list/timeline/questionreponse/questionreponse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatCardModule, MatDialogModule,  MatTableModule,
   MatMenuModule, MatProgressSpinnerModule,
    MatCheckboxModule,MatGridListModule,MatTabsModule,MatPaginatorModule,MatSortModule,MatChipsModule,MatDatepickerModule,
    MatNativeDateModule

} from '@angular/material';


import {ThematiqueService} from '../services/thematique.service';
import { AdminThematiqueComponent } from './Administrateur/admin-thematique/admin-thematique.component';
import { AdminAjouterThematiqueComponent } from './Administrateur/admin-thematique/admin-ajouter-thematique/admin-ajouter-thematique.component';
import {FormsModule} from '@angular/forms';
import { AdminEditerThematiqueComponent } from './Administrateur/admin-thematique/admin-editer-thematique/admin-editer-thematique.component';
import { AdminRubriqueComponent } from './Administrateur/admin-rubrique/admin-rubrique.component';
import {RubriqueService} from '../services/rubrique.service';
import { AdminAjouterRubriqueComponent } from './Administrateur/admin-rubrique/admin-ajouter-rubrique/admin-ajouter-rubrique.component';
import { AdminEditerRubriqueComponent } from './Administrateur/admin-rubrique/admin-editer-rubrique/admin-editer-rubrique.component';
import { AdminQuestionComponent } from './Administrateur/admin-question/admin-question.component';
import { AdminAjouterQuestionComponent } from './Administrateur/admin-question/admin-ajouter-question/admin-ajouter-question.component';
import { AdminEditerQuestionComponent } from './Administrateur/admin-question/admin-editer-question/admin-editer-question.component';
import { FooterComponent } from './footer/footer.component';
import { AdmingroupeComponent } from './Administrateur/admin-groupe/admin-groupe.component';
import { AdminAjouterRdvComponent } from './Administrateur/admin-rdv/admin-ajouter-rdv/admin-ajouter-rdv.component';
import { AdminRdvComponent } from './Administrateur/admin-rdv/admin-rdv.component';
import { AdminEditerRdvComponent } from './Administrateur/admin-rdv/admin-editer-rdv/admin-editer-rdv.component';
import {TypeQuestionService} from '../services/typeQuestion.service';
import {ApiService} from 'src/services/ApiService.service'
import { AdminUserComponent } from './Administrateur/admin-user/admin-user.component';
import { AdminAjouterUserComponent } from './Administrateur/admin-user/admin-ajouter-user/admin-ajouter-user.component';
import { AdminEditerUserComponent } from './Administrateur/admin-user/admin-editer-user/admin-editer-user.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import {UserService} from 'src/services/user.service';
import { SidenavListComponent } from './home/sidenav-list/sidenav-list.component';
import { NotFoundComponent } from './not-found/not-found.component'



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    QuestionreponseComponent,
    TimelineComponent,
    HomeComponent,
    ThematiqueComponent,
    RubriqueComponent,
    QuestionreponseComponent,
    AdminThematiqueComponent,
    AdminAjouterThematiqueComponent,
    AdminEditerThematiqueComponent,
    AdminRubriqueComponent,
    AdminAjouterRubriqueComponent,
    AdminEditerRubriqueComponent,
    AdminQuestionComponent,
    AdminAjouterQuestionComponent,
    AdminEditerQuestionComponent,
    FooterComponent,
    AdmingroupeComponent,
    AdminAjouterRdvComponent,
    AdminRdvComponent,
    AdminEditerRdvComponent,
    AdminUserComponent,
    AdminAjouterUserComponent,
    AdminEditerUserComponent,
    LoginComponent,
    AddUserComponent,
    AdminComponent,
    RegisterComponent,
    UserComponent,
    SidenavListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
     MatFormFieldModule,
    MatSelectModule, MatCardModule, MatDialogModule,  MatTableModule,
     MatMenuModule, MatProgressSpinnerModule,
     MatCheckboxModule,MatGridListModule,
     MatTabsModule,
     MatPaginatorModule,
     MatSortModule,
     MatChipsModule,
     MatDatepickerModule,
     MatNativeDateModule
     
     
     
  ],
  providers: [
    EmployeeService,
    RdvService,
    QuestionRepService,
    ThematiqueService,
    RubriqueService,
    QuestionRepService,
    TypeQuestionService,
    ApiService,
    httpInterceptorProviders
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule
  ],

  
  bootstrap: [AppComponent]
})
export class AppModule { }
