import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HomeComponent } from '../home/home.component';
import { PublicRoutingModule } from './public.routes';


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        PublicRoutingModule
    ],
    declarations: [
      LoginComponent,
      SignUpComponent,
      HomeComponent,
    ]
})
export class PublicModule { }
