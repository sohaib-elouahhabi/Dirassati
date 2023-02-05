import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEtudRoutingModule } from './gestion-etud-routing.module';
import { GroupEtudComponent } from './components/group-etud/group-etud.component';
import { StudentDataComponent } from './components/student-data/student-data.component';


@NgModule({
  declarations: [
    GroupEtudComponent,
    StudentDataComponent
  ],
  imports: [
    CommonModule,
    GestionEtudRoutingModule
  ]
})
export class GestionEtudModule { }
