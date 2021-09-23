import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QadepartmentComponent} from './qadepartment.component'
const routes: Routes = [
  {
    path:'',
    component : QadepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QadepartmentRoutingModule { }
