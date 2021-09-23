import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BadepartmentComponent} from './badepartment.component'

const routes: Routes = [ {
  path:'',
  component : BadepartmentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadepartmentRoutingModule { }
