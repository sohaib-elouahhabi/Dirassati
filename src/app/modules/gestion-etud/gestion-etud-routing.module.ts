import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GroupEtudComponent} from "./components/group-etud/group-etud.component";

const routes: Routes = [
  {path:'monGroupe', component:GroupEtudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionEtudRoutingModule { }
