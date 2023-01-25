import {Component, OnInit, ViewChild, AfterViewInit, Injector, ChangeDetectorRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {Subject, ReplaySubject, Observable} from 'rxjs';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import {LandingComponent} from "../../../../landing/landing.component";
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.scss']
})
@Injectable({
  providedIn: 'root'
})

export class ListProfComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom', 'prenom','email', 'grade','specialite','sexe','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(  private injector: Injector,private changeDetectorRefs: ChangeDetectorRef  /*private land : LandingComponent*/ ){  }


  authService = this.injector.get(AuthServiceService);


  ngOnInit(): void {

    // setTimeout(() => { this.getAllProfs() }, 1000 * 2)
    this.getAllProfs();
  }




  getAllProfs(){
    this.authService.getProfs()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.changeDetectorRefs.detectChanges();
      }
    })
  }
  edit(row:any){
    const land = this.injector.get(LandingComponent);
    land.editForm(row);
  }


  deleteRow(id:number){
    this.authService.deleteProf(id)
      .subscribe({
        next:(res)=>{
          this.getAllProfs();
          alert("professor deleted")
        },error:(err)=>{
          console.log(err);
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
