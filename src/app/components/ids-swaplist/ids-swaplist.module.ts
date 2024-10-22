import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsSwaplistRoutingModule } from './ids-swaplist-routing.module';
import { IdsSwaplistComponent } from './ids-swaplist.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsSwaplistComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsSwaplistRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsSwaplistModule { }
