import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderdetailsComponent} from './orderdetails.component';

export const routes: Routes = [
  {
    path: '',
    component: OrderdetailsComponent,
    data: {
      title: 'order details'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderdetailsRoutingModule {
}
