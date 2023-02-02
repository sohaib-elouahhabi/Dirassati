import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {AuthServiceService} from "../../../../Services/auth-service.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {LandingComponent} from "../../../../landing/landing.component";
import {AjouterFormDialComponent} from "../../../../ajouter-form-dial/ajouter-form-dial.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.scss']
})
export class ListCoursComponent implements OnInit{

  displayedColumns: string[] = ['cours_id', 'nom_cours', 'Module','annee','designation_formation','nom','email','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog : MatDialog ,private api : AuthServiceService, private injector : Injector) { }

  ngOnInit(): void {
    this.getAllCourses();

  }

  getAllCourses(){
    this.api.getCourses()
      .subscribe({
        next:(res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(res);
        },error:(err)=>{
          console.log(err)
        }
      })
  }
  edit(row:any){
    const land = this.injector.get(LandingComponent);
    land.editForm(row);
  }



  deleteRow(id:number){
    this.api.deleteCourse(id)
      .subscribe({
        next:(res)=>{
          this.getAllCourses();
          alert("votre cours a ètè supprimer");
        },error:(err)=>{
          alert("error please check console")
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
