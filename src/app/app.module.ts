import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rt { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos.component';
import { Cursos2Component } from './cursos2/cursos2.component';
import { PropertyBinding } from './PropertyBinding-9.component';
import { ClassBinding } from './ClassBinding.component';
import { StyleBinding } from './StyleBinding.component';
import { EventBinding } from './EventBinding.component';
import { EventFiltering } from './EventFiltering.component';
import { TemplateVariable } from './TemplateVariable.component';
import { MensajeComponent } from './mensaje/mensaje.component';





@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    Cursos2Component,
    PropertyBinding,
    ClassBinding,
    StyleBinding,
    EventBinding,
    EventFiltering,
    TemplateVariable,
    MensajeComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
