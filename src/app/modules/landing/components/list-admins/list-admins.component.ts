import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {AuthServiceService} from "../../../../Services/auth-service.service";
import {LandingComponent} from "../../../../landing/landing.component";

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
  constructor(private api : AuthServiceService, private injector : Injector) {  }
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
  edit(row:any){
    const land = this.injector.get(LandingComponent);
    land.editForm(row);
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
