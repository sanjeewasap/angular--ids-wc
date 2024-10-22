import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsActionPanelComponent } from './ids-action-panel.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsActionPanelComponent
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
export class IdsActionPanelRoutingModule { }
