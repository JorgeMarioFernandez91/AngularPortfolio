import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; /// new
import { ReactiveFormsModule } from "@angular/forms"; /// new

import {
        MatFormFieldModule,
      } from '@angular/material/form-field';  ///new
import {
        MatButtonModule,
       } from '@angular/material/button';  ///new
import {
        MatInputModule,
       } from '@angular/material/input';  ///new

import { MessageService } from '../app/message.service';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { Project3Component } from './project3/project3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    Project1Component,
    Project2Component,
    Project3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, /// new
    ReactiveFormsModule, /// new

    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,

    BrowserAnimationsModule, 
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  // declarations: [
  //   SearchComponent,
  // ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
