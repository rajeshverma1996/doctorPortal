import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { PublicRoutingModule } from './public.routes';


@NgModule({
    imports: [
      CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PublicRoutingModule
    ],
    declarations: [
      LoginComponent,
      HomeComponent,
    ]
})
export class PublicModule { }
