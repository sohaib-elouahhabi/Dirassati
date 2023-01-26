import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {AuthServiceService} from "../../../../Services/auth-service.service";

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.scss']
})
export class ListAdminsComponent implements OnInit{

  displayedColumns: string[] = ['id', 'nom', 'prenom','email','address','sexe','fonction','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api : AuthServiceService) {  }
  ngOnInit(): void {
    this.getAllAdmin();
  }

  getAllAdmin(){
    return this.api.getAdmin()
      .subscribe({
        next:(res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(res);
        }
      })
  }

  deleteRow(id:number){
    this.api.deleteAdmin(id)
      .subscribe({
        next:(res)=>{
          this.getAllAdmin();
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
