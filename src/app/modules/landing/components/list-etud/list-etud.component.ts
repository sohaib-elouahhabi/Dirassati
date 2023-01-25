import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-etud',
  templateUrl: './list-etud.component.html',
  styleUrls: ['./list-etud.component.scss']
})
export class ListEtudComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom', 'prenom','email','address','sexe','cne','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api : AuthServiceService){}

  ngOnInit(): void {
    this.getALLETUD();

  }

  getALLETUD(){
    this.api.getEtud()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  deleteRow(id:number){
    this.api.deleteEtud(id)
      .subscribe({
        next:(res)=>{
          this.getALLETUD();
          alert("Etudiant Supprimé");
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
