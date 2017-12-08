import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { BetTicketComponent } from './components/betticket/betticket.component';
import { SportTreeComponent } from './components/sport-tree/sport-tree.component';
import { EventComponent } from './components/event/event.component';



import { SportService } from './service/sport.service';
import { OddColumnPipe } from './pipes/odd-column.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BetTicketComponent,
    SportTreeComponent,
    EventComponent,
    OddColumnPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule 
  ],
  providers: [
    SportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
