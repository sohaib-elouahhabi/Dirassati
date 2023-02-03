import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import {LandingEtudiantComponent} from "./landing-etudiant/landing-etudiant.component";

const routes: Routes = [
  { path :'login', component: LoginComponent},
  { path :'dirassati', component : LandingComponent, loadChildren:()=>
  import('./modules/landing/landing.module')
  .then((m)=> m.LandingModule)},
  { path:'' , redirectTo :'/login', pathMatch :'full'},
  {path:'StudentPortal', component: LandingEtudiantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
