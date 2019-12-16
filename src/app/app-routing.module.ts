import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HelloComponent } from './hello/hello.component';
import { ApigridComponent } from './apigrid/apigrid.component';
import {FormComponent} from './form/form.component';
import {NgSelectComponent} from '@ng-select/ng-select';
import {SelectComponent} from './select/select.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'hello', component: HelloComponent},
  { path: 'test', component: ApigridComponent},
  { path: 'test/:id', component: ApigridComponent},
  { path: 'form', component: FormComponent},
  { path: 'form/:id', component: FormComponent},
  { path: 'select', component: SelectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
