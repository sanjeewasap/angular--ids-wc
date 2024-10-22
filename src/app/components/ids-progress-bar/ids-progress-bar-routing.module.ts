import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsProgressBarComponent } from './ids-progress-bar.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsProgressBarComponent
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
export class IdsProgressBarRoutingModule { }
