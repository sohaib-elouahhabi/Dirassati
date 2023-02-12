import { Token } from '@angular/compiler';
import {OnInit, ViewChild, Component, Injector, OnDestroy} from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouteReuseStrategy } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AjouterFormDialComponent } from '../ajouter-form-dial/ajouter-form-dial.component';
import { ListProfComponent } from '../modules/landing/components/list-prof/list-prof.component';
import {LandingModule} from "../modules/landing/landing.module";
import {BaseURL} from "../../main";
import Swal from "sweetalert2";



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent  implements OnInit, OnDestroy {
  //@ViewChild(ListProfComponent, {static : true}) la !: ListProfComponent ;

  constructor(private dialog : MatDialog, public authService : AuthServiceService,
              private router: Router, private lp : ListProfComponent,private activatedRoute: ActivatedRoute){
    const token = localStorage.getItem('auth_token');
    this.authService._isLoggedIn$.next(!!token);
   }



   alerted = localStorage.getItem('alerted');




   ngOnInit(): void {
    /*this.checkingIfLoggedIn();*/
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

   }




  openDialog(){
    this.dialog.open(AjouterFormDialComponent,{
      width :'40%',
    }).afterClosed()
    return true;
  }







   editForm(data:any){
    this.dialog.open(AjouterFormDialComponent,{
        width:'30%',
        data
     }).afterClosed()
   }

   logout(){
    localStorage.removeItem('auth_token');
    this.router.navigate(['login']);
   }

  ngOnDestroy(): void {
    localStorage.removeItem('alerted');
  }





}
