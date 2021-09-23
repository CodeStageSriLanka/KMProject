import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrdepartmentComponent } from './hrdepartment.component';

const routes: Routes = [
  {
    path:'',
    component : HrdepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrdepartmentRoutingModule { }
