import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {BehaviorSubject} from "rxjs";
import {AuthServiceService} from "../../../../Services/auth-service.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {LandingComponent} from "../../../../landing/landing.component";

@Component({
  selector: 'app-modif-emploi',
  templateUrl: './modif-emploi.component.html',
  styleUrls: ['./modif-emploi.component.scss']
})
export class ModifEmploiComponent implements OnInit{

  displayedColumns: string[] = ['id', 'Subject', 'StartTime', 'EndTime', 'cour_id','prof','nom_groupe','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource$ = new BehaviorSubject<MatTableDataSource<any> | null>(null);
  constructor(private api: AuthServiceService, private injector : Injector) {
  }

  ngOnInit() :void{
    this.getEmploie();
  }


  getEmploie(){
    this.api.getEmploi()
      .subscribe({
        next:(res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.dataSource$.next(this.dataSource);
          console.log(res)
        },error:(err)=>{
          console.log(err);
        }
      })
  }


  edit(row: any) {
    const land = this.injector.get(LandingComponent);
    land.editForm(row);
  }

  deleteRow(id: number) {
    this.api.deleteEmploi(id)
      .subscribe({
        next: (res) => {
          this.getEmploie();
          alert("class deleted")
        }, error: (err) => {
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
