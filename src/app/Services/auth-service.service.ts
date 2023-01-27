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
  /*[all this part is for admin-maybe I'll create another service]*/
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
  deleteEtud(id:number){
    return this.http.delete<any>(`${BaseURL}/deleteEtudiant/`+id,this.httpOptions)
  }
  postEtud(data:any){
    return this.http.post<any>(`${BaseURL}/addEtudiant`,data,this.httpOptions);
  }
  putEtud(data:any,id:number){
    return this.http.put<any>(`${BaseURL}/updateEtudiant/`+id,data,this.httpOptions);
  }

  /*Admin*/
  getAdmin(){
    return this.http.get<any>(`${BaseURL}/getAllAdministratifData`,this.httpOptions);
  }
  deleteAdmin(id:number){
    return this.http.delete<any>(`${BaseURL}/deleteAdministratif/`+id,this.httpOptions)
  }
  postAdmin(data:any){
    return this.http.post<any>(`${BaseURL}/addAdministratif`,data,this.httpOptions);
  }
  putAdmin(data:any,id:number){
    return this.http.put<any>(`${BaseURL}/updateAdministratif/`+id,data,this.httpOptions);
  }

/*for courses*/

  getCourses(){
    return this.http.get<any>(`${BaseURL}/getAllCour`,this.httpOptions);
  }

  /*for groupe*/
  getGroup(){
    return this.http.get<any>(`${BaseURL}/getAllGroupe`,this.httpOptions);
  }




}
