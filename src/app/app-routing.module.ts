import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './authentication/page404/page404.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { SharedocComponent } from './sharedoc/sharedoc.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/authentication/signin',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'hrdepartment',
        loadChildren: () =>
          import('./hrdepartment/hrdepartment.module').then(
            (m) => m.HrdepartmentModule
          )
      },
      {
        path: 'badepartment',
        loadChildren: () =>
          import('./badepartment/badepartment.module').then(
            (m) => m.BadepartmentModule
          )
      },
      {
        path: 'qadepartment',
        loadChildren: () =>
          import('./qadepartment/qadepartment.module').then(
            (m) => m.QadepartmentModule
          )
      },
      {
        path: 'dddepartment',
        loadChildren: () =>
          import('./dddepartment/dddepartment.module').then(
            (m) => m.DddepartmentModule
          )
      },
      {
        path: 'mddepartment',
        loadChildren: () =>
          import('./mddepartment/mddepartment.module').then(
            (m) => m.MddepartmentModule
          )
      },
      {
        path: 'chat-results',
        loadChildren: () =>
          import('./chatresults/chatresults.module').then(
            (m) => m.ChatresultsModule
          )
      },
    ]
  },
  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      )
  },

  {
    path: 'sharedoc',
    component: SharedocComponent,
    loadChildren: () =>
      import('./sharedoc/sharedoc.module').then(
        (m) => m.SharedocModule
      )
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
