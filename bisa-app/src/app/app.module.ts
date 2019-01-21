import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFontAwesomeModule} from "angular-font-awesome";

import {NoteServiceService} from "./services/note-service.service";

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [NoteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
