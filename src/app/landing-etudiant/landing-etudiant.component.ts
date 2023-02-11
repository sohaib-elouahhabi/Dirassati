import {Component, OnDestroy, OnInit} from '@angular/core';

import Swal from "sweetalert2";
import {AuthServiceService} from "../Services/auth-service.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-landing-etudiant',
  templateUrl: './landing-etudiant.component.html',
  styleUrls: ['./landing-etudiant.component.scss']
})
export class LandingEtudiantComponent implements OnInit, OnDestroy{
   alerted = localStorage.getItem('alerted');
   StudentData : any=[];
   CurrentURL :any;


   constructor(public authService : AuthServiceService, private router: Router) {
     const token = localStorage.getItem('auth_token');
     this.authService._isLoggedIn$.next(!!token);
   }

   /*this is to display the alert just once*/
  ngOnInit(): void {
    this.fetchUserDatas();
    /*for modal*/
  if (this.alerted!='yes'){
    if(localStorage.getItem('auth_token')){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'You are connected' ,
        showConfirmButton: false,
        timer: 1500
      })
      localStorage.setItem('alerted','yes');
    }
  }
/*end modal*/

/*for getting url*/
    this.CurrentURL = this.router.url;
    console.log(this.CurrentURL);
  }



  fetchUserDatas(){
    this.authService.fetchUserData()
      .subscribe({
        next:(res)=>{
          this.StudentData = res.data;
          console.log(this.StudentData);
        }
      })
  }


  logout(){
    localStorage.removeItem('auth_token');
    this.router.navigate(['login']);
  }





















/*in case the component is destroyed*/
  ngOnDestroy(): void {
    localStorage.removeItem('alerted');
  }
}
