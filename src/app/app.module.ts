import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './_guard/auth.guard';
import { PublicComponent } from './layout/public.compont';
import { AdminComponent } from './layout/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
