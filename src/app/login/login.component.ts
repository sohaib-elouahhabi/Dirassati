import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  TypeUserTokenBearer : any =[]
  formGroup !: FormGroup;
  alerted = localStorage.getItem('alerted');
  constructor(private authService : AuthServiceService, private router: Router){

   }
  ngOnInit(): void {
    if (this.alerted!='yes'){
      Swal.fire(
        'Reminder',
        'this web application is still being developed by 5 beautiful people, so it might have some bugs',
        'info'
      )
      localStorage.setItem('alerted','yes');
    }
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }

  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.state==1){
          console.log(result);
          localStorage.setItem('auth_token',result.token);
          if(result.fullData.type=='Admin'){
            this.router.navigate(['dirassati/prof']);
            console.log('success : ',result.fullData.type );
          }
          if(result.fullData.type == 'Etudiant'){
            this.router.navigate(['StudentPortal/StudentData']);
            console.log('success : ',result.fullData.type );
          }
        }
      },error =>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email or password not working!',
        })
      })
    }
  }

  ngOnDestroy(): void {
    localStorage.removeItem('alerted');
  }

}
