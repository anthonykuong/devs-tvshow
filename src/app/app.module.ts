import { BrowserModule } from '@angular/platform-browser';  //only once
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EpisodesModule } from './episodes/episodes.module';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { SummaryModule } from './summary/summary.module';
import { CastModule } from './cast/cast.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EpisodesModule,
    CoreModule,
    SummaryModule,
    CastModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
