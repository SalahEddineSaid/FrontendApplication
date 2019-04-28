import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AdminThematiqueComponent} from './Administrateur/admin-thematique/admin-thematique.component';
import {AdminAjouterThematiqueComponent} from './Administrateur/admin-thematique/admin-ajouter-thematique/admin-ajouter-thematique.component';
import {AdminEditerThematiqueComponent} from './Administrateur/admin-thematique/admin-editer-thematique/admin-editer-thematique.component';
import {AdminRubriqueComponent} from './Administrateur/admin-rubrique/admin-rubrique.component';
import {AdminEditerRubriqueComponent} from './Administrateur/admin-rubrique/admin-editer-rubrique/admin-editer-rubrique.component';
import {AdminAjouterRubriqueComponent} from './Administrateur/admin-rubrique/admin-ajouter-rubrique/admin-ajouter-rubrique.component';
import {AdminQuestionComponent} from './Administrateur/admin-question/admin-question.component';
import {AdminEditerQuestionComponent} from './Administrateur/admin-question/admin-editer-question/admin-editer-question.component';
import {AdminAjouterQuestionComponent} from './Administrateur/admin-question/admin-ajouter-question/admin-ajouter-question.component';
import {AdminAjouterRdvComponent} from './Administrateur/admin-rdv/admin-ajouter-rdv/admin-ajouter-rdv.component';
import { AdmingroupeComponent } from './Administrateur/admin-groupe/admin-groupe.component';
import {AdminRdvComponent} from './Administrateur/admin-rdv/admin-rdv.component';
import {AdminEditerRdvComponent} from './Administrateur/admin-rdv/admin-editer-rdv/admin-editer-rdv.component';
import {AdminUserComponent} from './Administrateur/admin-user/admin-user.component';
import {AdminEditerUserComponent} from './Administrateur/admin-user/admin-editer-user/admin-editer-user.component';
import {AdminAjouterUserComponent} from './Administrateur/admin-user/admin-ajouter-user/admin-ajouter-user.component';
import {LoginComponent} from 'src/app/login/login.component'

import {AddUserComponent}  from 'src/app/add-user/add-user.component'
import { UserComponent } from './user/user.component';

import { AdminComponent } from './admin/admin.component';

import { RegisterComponent } from './register/register.component';

export const ROUTES : Routes = [
    {
        path: 'consultant',
        loadChildren: './consultant/consultant.module#ConsultantModule'
    },
  
    {path:'home', component : HomeComponent},
    {path:'admin-groupe', component : AdmingroupeComponent},
    {path:'admin-thematiques', component : AdminThematiqueComponent},
    {path:'admin-editer-thematique', component : AdminEditerThematiqueComponent},
    {path:'admin-ajouter-thematique', component : AdminAjouterThematiqueComponent},
    {path:'admin-rubriques', component : AdminRubriqueComponent},
    {path:'admin-editer-rubrique', component : AdminEditerRubriqueComponent},
    {path:'admin-ajouter-rubrique', component : AdminAjouterRubriqueComponent},
    {path:'admin-questions', component : AdminQuestionComponent},
    {path:'admin-editer-question', component : AdminEditerQuestionComponent},
    {path:'admin-ajouter-question', component : AdminAjouterQuestionComponent},
    {path:'admin-rdvs', component : AdminRdvComponent},
    {path:'admin-editer-rdv', component : AdminEditerRdvComponent},
    {path:'admin-ajouter-rdv', component : AdminAjouterRdvComponent},
    {path:'admin-users', component : AdminUserComponent},
    {path:'admin-editer-user', component : AdminEditerUserComponent},
    {path:'admin-ajouter-user', component : AdminAjouterUserComponent},
    {path:'AddUser', component : AddUserComponent},
    {path:'login',component:LoginComponent},
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    }, {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },

];
