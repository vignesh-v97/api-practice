import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './components/api/api.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from './components/form/form.component';
import {StudentTableComponent} from './components/student-table/student-table.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// library.add(faTimesCircle);

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    FormComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
