import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewListingsPage } from './view-listings.page';

const routes: Routes = [
  {
    path: '',
    component: ViewListingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewListingsPageRoutingModule {}
