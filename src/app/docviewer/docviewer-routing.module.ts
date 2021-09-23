import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocviewerComponent} from './docviewer.component'
const routes: Routes = [
  {
    path:'',
    component : DocviewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocviewerRoutingModule { }
