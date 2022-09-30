import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameslistComponent } from './nameslist.component';
const routes: Routes = [
  { path: '', component: NameslistComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class NameslistRoutingModule { }
