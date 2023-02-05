import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from "../../../../Services/auth-service.service";

@Component({
  selector: 'app-emploie',
  templateUrl: './emploie.component.html',
  styleUrls: ['./emploie.component.scss']
})
export class EmploieComponent implements OnInit{

  coursesAndID : any;
  scheduelID:any;
  selectedDevice: any;

  constructor(private api : AuthServiceService) {  }

  ngOnInit(): void {
    this.getGroupsAndID();
  }


/*for display usage*/
  getGroupsAndID(){
    this.api.getCourses()
      .subscribe({
        next:(res)=>{
          this.coursesAndID = res;
          this.scheduelID = res.cours_id;
        }
      })
  }
/*for fetching data usage*/




  getScheduelByID(id:number){
    this.api.getOneCourseByID(id)
      .subscribe({
        next:(res)=>{
          console.log(res)
        },error:(err)=>{
          console.log(err)
        }
      })
  }



  onChange(id: number) {
    this.api.getOneCourseByID(id)
      .subscribe({
        next:(res)=>{
          console.log(res)
          this.selectedDevice = res;
        },error:(err)=>{
          console.log(err)
        }
      })
    // ... do other stuff here ...
  }


}
