import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Layouts
import {FullLayoutComponent} from './layouts/full-layout.component';
import {SimpleLayoutComponent} from './layouts/simple-layout.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'

  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'tablebooking',
        loadChildren: './tablebooking/tablebooking.module#TablebookingModule'
      },
      {
        path: 'foodorder',
        loadChildren: './food_order/foodorder.module#FoodorderModule'
      },
      {
        path: 'orderdetails',
        loadChildren: './order_details/orderdetails.module#OrderdetailsModule'
      }
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
