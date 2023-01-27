import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthServiceService} from "../../../../Services/auth-service.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

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
  constructor(private api : AuthServiceService) { }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
