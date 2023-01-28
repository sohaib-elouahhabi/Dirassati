import { Token } from '@angular/compiler';
import {OnInit, AfterViewInit, ViewChild, Component, Injector} from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouteReuseStrategy } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AjouterFormDialComponent } from '../ajouter-form-dial/ajouter-form-dial.component';
import { ListProfComponent } from '../modules/landing/components/list-prof/list-prof.component';
import {LandingModule} from "../modules/landing/landing.module";
import {BaseURL} from "../../main";



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent  implements OnInit,AfterViewInit {
  //@ViewChild(ListProfComponent, {static : true}) la !: ListProfComponent ;

  constructor(private dialog : MatDialog, public authService : AuthServiceService,
              private router: Router, private lp : ListProfComponent,private activatedRoute: ActivatedRoute){
    const token = localStorage.getItem('auth_token');
    this.authService._isLoggedIn$.next(!!token);
   }



  ngAfterViewInit(): void {

  }

   ngOnInit(): void {
    /*this.checkingIfLoggedIn();*/
   }


  openDialog(){
    this.dialog.open(AjouterFormDialComponent,{
      width :'40%',
    }).afterClosed().subscribe(val=>{
      if(val==='save'){

      }
    })
  }




  /* checkingIfLoggedIn(){
    if (!this.authService._isLoggedIn$){
      //this.router.navigate(['login']);
      console.log((this.authService._isLoggedIn$))
    }
   }*/


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





}
