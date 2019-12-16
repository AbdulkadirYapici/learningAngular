import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { Injectable, ErrorHandler, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { RecordsService } from './records.service';
import { ApirequestService } from './apirequest.service';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ApigridComponent } from './apigrid/apigrid.component';
import { FormComponent } from './form/form.component';
import { SelectComponent } from './select/select.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HelloComponent,
    LoginComponent,
    AdminComponent,
    ApigridComponent,
    FormComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    AgGridModule.withComponents([])

  ],
  providers: [RecordsService, ApirequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
