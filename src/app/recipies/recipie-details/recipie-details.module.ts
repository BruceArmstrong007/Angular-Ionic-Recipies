import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipieDetailsPageRoutingModule } from './recipie-details-routing.module';

import { RecipieDetailsPage } from './recipie-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipieDetailsPageRoutingModule
  ],
  declarations: [RecipieDetailsPage]
})
export class RecipieDetailsPageModule {}
