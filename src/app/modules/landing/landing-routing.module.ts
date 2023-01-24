import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import { ListEtudComponent } from './components/list-etud/list-etud.component';
import { ListProfComponent } from './components/list-prof/list-prof.component';

const routes: Routes = [
  {path:'prof', component:ListProfComponent},
  {path:'etudiant', component:ListEtudComponent},
  {path:'admin', component:ListAdminsComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
