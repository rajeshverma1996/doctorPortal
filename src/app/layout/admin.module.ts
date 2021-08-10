import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { PatientComponent } from '../patient/patient.component';
import { PatientDetailsComponent } from '../patientDetails/patientDetails.component';


@NgModule({
    imports: [
      CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ],
    declarations: [
      DashboardComponent,
      PatientComponent,
      PatientDetailsComponent
    ]
})
export class AdminModule { }
