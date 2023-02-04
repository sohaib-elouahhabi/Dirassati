import { Component,OnInit } from '@angular/core';

import Swal from "sweetalert2";
import {AuthServiceService} from "../Services/auth-service.service";
@Component({
  selector: 'app-landing-etudiant',
  templateUrl: './landing-etudiant.component.html',
  styleUrls: ['./landing-etudiant.component.scss']
})
export class LandingEtudiantComponent implements OnInit{
   alerted = localStorage.getItem('alerted');


   constructor(public authService : AuthServiceService) {
     const token = localStorage.getItem('auth_token');
     this.authService._isLoggedIn$.next(!!token);
   }

   /*this is to display the alert just once*/
  ngOnInit(): void {
  if (this.alerted!='yes'){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    localStorage.setItem('alerted','yes');
  }

  }

}
