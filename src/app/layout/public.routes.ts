import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";


const PUBLIC_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forChild(PUBLIC_ROUTES)],
  exports: [RouterModule]
})

export class PublicRoutingModule { }
