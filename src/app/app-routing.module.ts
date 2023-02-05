import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import {LandingEtudiantComponent} from "./landing-etudiant/landing-etudiant.component";
import {HomeComponent} from "./home/home.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";


const routes: Routes = [
  { path :'login', component: LoginComponent},
  /*lazyLoaded*/
  { path :'dirassati', component : LandingComponent, loadChildren:()=>
  import('./modules/landing/landing.module')
  .then((m)=> m.LandingModule)},
  { path:'' , redirectTo :'/Home', pathMatch :'full'},
  /*lazyLoaded*/
  {path:'StudentPortal', component: LandingEtudiantComponent, loadChildren:()=>
  import('./modules/gestion-etud/gestion-etud.module')
  .then((g)=>g.GestionEtudModule)},
  {path:'Home', component:HomeComponent},
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
