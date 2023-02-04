import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import { ListEtudComponent } from './components/list-etud/list-etud.component';
import { ListProfComponent } from './components/list-prof/list-prof.component';
import {ListCoursComponent} from "./components/list-cours/list-cours.component";
import {EmploieComponent} from "./components/emploie/emploie.component";

const routes: Routes = [
  {path:'prof', component:ListProfComponent, data: { shouldReuse: true }},
  {path:'etudiant', component:ListEtudComponent},
  {path:'admin', component:ListAdminsComponent},
  {path:'List-cours', component:ListCoursComponent},
  {path:'gestionEmploie', component:EmploieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
