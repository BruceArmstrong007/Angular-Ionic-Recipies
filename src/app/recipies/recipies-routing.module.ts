import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipiesPage } from './recipies.page';

const routes: Routes = [
  {
    path: '',
    component: RecipiesPage
  },
  {
    path: ':recipieID',
    loadChildren: () => import('./recipie-details/recipie-details.module').then( m => m.RecipieDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipiesPageRoutingModule {}
