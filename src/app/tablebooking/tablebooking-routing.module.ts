import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TablebookingComponent} from './tablebooking.component';

export const routes: Routes = [
  {
    path: '',
    component: TablebookingComponent,
    data: {
      title: 'table booking'
    }
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablebookingRoutingModule {}
