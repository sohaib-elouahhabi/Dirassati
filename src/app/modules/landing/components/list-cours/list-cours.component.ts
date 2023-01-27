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

  displayedColumns: string[] = ['id', 'nom', 'prenom','email','address','sexe','cne','nom_groupe','action'];
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
          console.log(res);
        }
      })
  }



}
