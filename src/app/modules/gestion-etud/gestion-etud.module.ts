import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEtudRoutingModule } from './gestion-etud-routing.module';
import { GroupEtudComponent } from './components/group-etud/group-etud.component';


@NgModule({
  declarations: [
    GroupEtudComponent
  ],
  imports: [
    CommonModule,
    GestionEtudRoutingModule
  ]
})
export class GestionEtudModule { }
