import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-list-etud',
  templateUrl: './list-etud.component.html',
  styleUrls: ['./list-etud.component.scss']
})
export class ListEtudComponent implements OnInit {

  

  constructor(private api : AuthServiceService){}

  ngOnInit(): void {
    this.getALLETUD();
    
  }

  getALLETUD(){
    this.api.getEtud()
    .subscribe({
      next:(res)=>{
        console.log(res)
      }
    })
  }


}
