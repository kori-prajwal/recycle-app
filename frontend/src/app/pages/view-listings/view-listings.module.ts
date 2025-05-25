import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewListingsPageRoutingModule } from './view-listings-routing.module';

import { ViewListingsPage } from './view-listings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewListingsPageRoutingModule
  ],
  declarations: [ViewListingsPage]
})
export class ViewListingsPageModule {}
