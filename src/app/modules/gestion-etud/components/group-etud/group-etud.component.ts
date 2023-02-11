import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {AuthServiceService} from "../../../../Services/auth-service.service";
import {StudentDataComponent} from "../student-data/student-data.component";

@Component({
  selector: 'app-group-etud',
  templateUrl: './group-etud.component.html',
  styleUrls: ['./group-etud.component.scss']
})
export class GroupEtudComponent  implements OnInit{
  displayedColumns: string[] = ['nom', 'prenom','email','address','sexe'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  idS: number=0;
  constructor(private api : AuthServiceService) {
  }







  ngOnInit(): void {
    this.fetchUserDatas();

  }

  fetchUserDatas(){
    this.api.fetchUserData()
      .subscribe({
        next:(res)=>{
          this.idS =  res[0].groupe_id;
          this.getAllGroup(this.idS);
        }
      })
  }


  getAllGroup(id:number){
    this.api.getGroupEtudByID(id)
      .subscribe({
        next:(res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(res);
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
