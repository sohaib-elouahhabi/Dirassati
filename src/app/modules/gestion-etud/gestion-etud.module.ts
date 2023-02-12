import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEtudRoutingModule } from './gestion-etud-routing.module';
import { GroupEtudComponent } from './components/group-etud/group-etud.component';
import { StudentDataComponent } from './components/student-data/student-data.component';
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { EmploiComponent } from './components/emploi/emploi.component';
import {FullCalendarModule} from "@fullcalendar/angular";


@NgModule({
  declarations: [
    GroupEtudComponent,
    StudentDataComponent,
    EmploiComponent
  ],
  imports: [
    CommonModule,
    GestionEtudRoutingModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    FullCalendarModule
  ]
})
export class GestionEtudModule { }
