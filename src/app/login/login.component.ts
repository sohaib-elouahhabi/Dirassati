import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  TypeUserTokenBearer : any =[]
  formGroup !: FormGroup;
  constructor(private authService : AuthServiceService, private router: Router){

   }
  ngOnInit(): void {

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
            this.router.navigate(['dirassati']);
            console.log('success : ',result.fullData.type );
          }
          if(result.fullData.type == 'Etudiant'){
            this.router.navigate(['StudentPortal']);
            console.log('success : ',result.fullData.type );
          }
        }
      })
    }
  }

}
