import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Component/home/home.component';
import { AppNavComponent } from './Component/app-nav/app-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MoviesComponent } from './Component/movies/movies.component';
import { DetailComponent } from './Component/detail/detail.component'

import {MaterialExampleModule} from '../material.module';
import {MatNativeDateModule} from '@angular/material/core';
import { RecentComponent } from './Component/recent/recent.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavComponent,
    MoviesComponent,
    DetailComponent,
    RecentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialExampleModule,
    MatNativeDateModule,
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
