import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsLookupComponent } from './ids-lookup.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsLookupComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsLookupRoutingModule { }
