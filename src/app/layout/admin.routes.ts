import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PatientComponent } from '../patient/patient.component';
import { PatientDetailsComponent } from '../patientDetails/patientDetails.component';



const ADMIN_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'patient', pathMatch: 'full'},
  { path: 'patient', component: PatientComponent },
  { path: '', redirectTo: 'patientDetails', pathMatch: 'full'},
  { path: 'patientDetails', component: PatientDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }

