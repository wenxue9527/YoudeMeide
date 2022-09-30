import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/names' },
  { path: 'names', loadChildren: () => import('./pages/nameslist/nameslist.module').then(m => m.nameslistModule),runGuardsAndResolvers:'always'},
  { path: 'chart', loadChildren: () => import('./pages/chart/chart.module').then(m => m.ChartModule) },
  { path: 'today', loadChildren: () => import('./pages/today/today.module').then(m => m.TodayModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { onSameUrlNavigation: 'reload' },
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
