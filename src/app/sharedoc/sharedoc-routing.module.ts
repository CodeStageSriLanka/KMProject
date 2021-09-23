import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedocComponent} from './sharedoc.component'
const routes: Routes = [
  {
    path:'',
    component : SharedocComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedocRoutingModule { }
