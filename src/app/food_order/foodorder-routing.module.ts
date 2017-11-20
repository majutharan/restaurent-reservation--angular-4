import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FoodorderComponent} from './foodorder.component';

export const routes: Routes = [
  {
    path: '',
    component: FoodorderComponent,
    data: {
      title: 'food order'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodorderRoutingModule {}
