import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos.component';
import { Cursos2Component } from './cursos2/cursos2.component';
import { PropertyBinding } from './PropertyBinding-9.component';
import { ClassBinding } from './ClassBinding.component';
import { StyleBinding } from './StyleBinding.component';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    Cursos2Component,
    PropertyBinding,
    ClassBinding,
    StyleBinding

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
