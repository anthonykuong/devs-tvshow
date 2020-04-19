import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEpisodesComponent } from './list-episodes/list-episodes.component';



@NgModule({
  declarations: [ListEpisodesComponent],
  imports: [
    CommonModule
  ],
  exports: [ListEpisodesComponent]
})
export class EpisodesModule { }
