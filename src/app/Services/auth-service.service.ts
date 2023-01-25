import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseURL } from 'src/main';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  token = localStorage.getItem('auth_token');
  httpOptions = { headers:new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization':`Bearer ${this.token}`
  })};



public _isLoggedIn$ = new BehaviorSubject<Boolean>(false);
isLoggedIn$ = this._isLoggedIn$.asObservable();
  constructor(private http: HttpClient) {   }
  /*[all this part is for admin-maybe i'll create another service]*/
/*Prof Stuff*/
  login(data:any):Observable<any>{
    return this.http.post(`${BaseURL}/logine`,data)
  }
   getProfs(){
    return this.http.get<any>(`${BaseURL}/getAllEnseigantData`,this.httpOptions);
  }
  AddProf(data:any){
    return this.http.post(`${BaseURL}/addEnseigant`,data,this.httpOptions)
  }

  putProduct(data:any,id:number){
    return this.http.put<any>(`${BaseURL}/updateEnseigant/`+id,data,this.httpOptions);
  }

  deleteProf(id:number){
    return this.http.delete<any>(`${BaseURL}/deleteEnseigant/`+id,this.httpOptions);
  }

/*Etudiant*/

  getEtud(){
    return this.http.get<any>(`${BaseURL}/getAllEtudiantData`,this.httpOptions);
  }

}
