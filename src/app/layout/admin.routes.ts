import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SuperAdminComponent } from '../superadmin/superadmin.component';


const ADMIN_ROUTES: Routes = [
  { path: '', redirectTo: 'superadmin', pathMatch: 'full'},
  {
    path: 'superadmin', component: SuperAdminComponent,
    children: [
      { path: '', redirectTo: 'saDashboard', pathMatch: 'full' },
      { path: 'saDashboard', component: DashboardComponent },

    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }

