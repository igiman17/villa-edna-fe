import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ReservationComponent } from './reservation/reservation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule, MatCard} from '@angular/material/card'; 
import {MatRadioModule} from '@angular/material/radio';
import { HomeComponent } from './home/home.component'; 


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    ReservationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
