import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipieDetailsPage } from './recipie-details.page';

const routes: Routes = [
  {
    path: '',
    component: RecipieDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipieDetailsPageRoutingModule {}
