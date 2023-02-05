import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { ListProfComponent } from './components/list-prof/list-prof.component';
import { ListEtudComponent } from './components/list-etud/list-etud.component';
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from "@angular/common/http";
import { ListCoursComponent } from './components/list-cours/list-cours.component';
import { EmploieComponent } from './components/emploie/emploie.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListProfComponent,
    ListEtudComponent,
    ListAdminsComponent,
    ListCoursComponent,
    EmploieComponent
  ],
  providers: [
    ListEtudComponent
  ]
  ,
    imports: [
        CommonModule,
        LandingRoutingModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        HttpClientModule,
        FormsModule
    ],
  exports:[
    ListProfComponent,
    ListEtudComponent,
    ListAdminsComponent,
    ListCoursComponent,
    EmploieComponent
  ]
})

export class LandingModule { }
