import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ],
    declarations: [
DashboardComponent
    ]
})
export class AdminModule { }
