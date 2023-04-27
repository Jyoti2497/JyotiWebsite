import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DefaultComponent } from './default/default.component';
import { CardComponent } from './card/card.component';
import { UserCompoComponent } from './user-compo/user-compo.component';
import { AllDataComponent } from './all-data/all-data.component';
import { SignupComponent } from './signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { VisitorAllComponent } from './visitor-all/visitor-all.component';
import { NewCompoComponent } from './new-compo/new-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    HomeComponent,
    NavbarComponent,
    DefaultComponent,
    CardComponent,
    UserCompoComponent,
    AllDataComponent,
    SignupComponent,
    AddEmployeeComponent,
    VisitorAllComponent,
    NewCompoComponent


  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
