import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MddepartmentComponent} from './mddepartment.component'
const routes: Routes = [
  {
    path:'',
    component : MddepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MddepartmentRoutingModule { }
