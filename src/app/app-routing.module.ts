import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin.component';
import { PublicComponent } from './layout/public.compont';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './_guard/auth.guard';

const appRoutes: Routes = [
  {
      path: '',
      component: PublicComponent,
      children: [
          {
              path: '',
              loadChildren: () =>
                  import('./layout/public.module').then(
                      m => m.PublicModule
                  )
          }]
  },
  {
      path: 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard],
      children: [
          {
              path: '',
              loadChildren: () =>
                  import('./layout/admin.module').then(
                      m => m.AdminModule
                  )
          }]
  },
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
