import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DddepartmentComponent} from './dddepartment.component'
const routes: Routes = [

  {
    path:'',
    component : DddepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DddepartmentRoutingModule { }
