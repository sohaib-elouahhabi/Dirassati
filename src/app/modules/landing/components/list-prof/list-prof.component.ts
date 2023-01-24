import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import {LandingComponent} from "../../../../landing/landing.component";

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.scss']
})
export class ListProfComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom', 'prenom','email', 'grade','specialite','sexe','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private authService: AuthServiceService, private land : LandingComponent ){

  }

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
        console.log(res)
      }
    })
  }
  edit(row:any){
    this.land.editForm(row);
  }


  deleteRow(id:number){
    this.authService.deleteProf(id)
      .subscribe({
        next:(res)=>{
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
