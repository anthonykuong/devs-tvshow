import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SynopsisComponent } from './synopsis/synopsis.component';
import {SummaryRoutingModule} from './summary-routing.module';


@NgModule({
  declarations: [SynopsisComponent],
  imports: [
    CommonModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
