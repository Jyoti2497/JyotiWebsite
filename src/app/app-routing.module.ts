import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllDataComponent } from './all-data/all-data.component';
import { CardComponent } from './card/card.component';
import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SignupComponent } from './signup/signup.component';
import { UserCompoComponent } from './user-compo/user-compo.component';
import { VisitorAllComponent } from './visitor-all/visitor-all.component';
import { NewCompoComponent } from './new-compo/new-compo.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-signup',
    pathMatch: 'full',
  },
  {
    path: 'app-signup',
    component: SignupComponent,
    data: { hideNavbar: true }
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationFormComponent
  },
  {
    path: 'app-card',
    component: CardComponent
  },
  {
    path: 'user-data',
    component: UserCompoComponent
  },
  {
    path: 'default',
    component: DefaultComponent
  },
  {
    path: 'all-data',
    component: AllDataComponent
  },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent
  },
  {
    path: 'pricing',
    component: VisitorAllComponent
  },
  {
    path: 'app-new-compo',
    component: NewCompoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
