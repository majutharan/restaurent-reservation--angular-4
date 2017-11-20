import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.routing';
import {DropdownModule, TabsModule} from 'ng2-bootstrap';
import {ChartsModule} from 'ng2-charts';
import {TablebookingComponent} from './tablebooking.component';
import {TablebookingRoutingModule} from './tablebooking-routing.module';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  imports: [
    TablebookingRoutingModule,
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    TablebookingComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }
  ]
})
export class TablebookingModule {}
