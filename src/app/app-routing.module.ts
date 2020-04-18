import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListEpisodesComponent} from './episodes/list-episodes/list-episodes.component';
import {SynopsisComponent} from './summary/synopsis/synopsis.component';
import {CharactersComponent} from './cast/characters/characters.component';


const routes: Routes = [
  {path :'summary', component: SynopsisComponent},
  {path :'cast', component: CharactersComponent},
  {path :'list', component: ListEpisodesComponent},
  {path :'', redirectTo: '/summary', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
