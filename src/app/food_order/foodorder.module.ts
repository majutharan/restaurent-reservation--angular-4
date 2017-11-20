import {NgModule} from '@angular/core';
import {DropdownModule, TabsModule} from 'ng2-bootstrap';
import {ChartsModule} from 'ng2-charts';
import {FoodorderRoutingModule} from './foodorder-routing.module';
import {FoodorderComponent} from './foodorder.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  imports: [
    FoodorderRoutingModule,
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [FoodorderComponent],
  providers: [
  ]
})
export class FoodorderModule {}
