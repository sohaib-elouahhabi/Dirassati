import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from "../../../../Services/auth-service.service";

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit{

   StudentData: any=[];
   loader:any = true;
   constructor(private authService: AuthServiceService) {
  }

  ngOnInit(): void {
    this.fetchUserDatas();
    setTimeout(()=>{
      this.loader = false;
    },3000);
  }

  fetchUserDatas(){
    this.authService.fetchUserData()
      .subscribe({
        next:(res)=>{
          this.StudentData = res[0];
          console.log(this.StudentData);
        }
      })
  }




}
