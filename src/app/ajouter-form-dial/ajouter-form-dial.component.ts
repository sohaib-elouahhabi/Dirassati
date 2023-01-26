import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthServiceService } from '../Services/auth-service.service';
import {error} from "@angular/compiler-cli/src/transformers/util";
import { Router } from '@angular/router';
import {ListProfComponent} from "../modules/landing/components/list-prof/list-prof.component";

@Component({
  selector: 'app-ajouter-form-dial',
  templateUrl: './ajouter-form-dial.component.html',
  styleUrls: ['./ajouter-form-dial.component.scss']
})
export class AjouterFormDialComponent implements OnInit{

  public CurrentURL : string ="";
  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthServiceService,
    private dialogRef : MatDialogRef<AjouterFormDialComponent>,
    @Inject(MAT_DIALOG_DATA) public editDataProf : any,
    @Inject(MAT_DIALOG_DATA) public editDataEtud : any
    , private router : Router
    ){}



  ProForm !: FormGroup;
  EtudForm !: FormGroup;
  AdminForm !: FormGroup;
  actionBtn : string ="Save"
  ngOnInit(): void {
    /*this is to get current url*/
    this.CurrentURL = this.router.url;
    console.log(this.CurrentURL);
    /*this form is for prof*/
    if(this.CurrentURL=='/dirassati/prof'){
      this.ProForm = this.formBuilder.group({
        nom :['',Validators.required],
        prenom:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        grade :['',Validators.required],
        sexe:['',Validators.required],
        specialite:['',Validators.required],
        adress :['',Validators.required]
       })
        if(this.editDataProf){
          this.actionBtn="Update"
          this.ProForm.controls['nom'].setValue(this.editDataProf.nom);
          this.ProForm.controls['prenom'].setValue(this.editDataProf.prenom);
          this.ProForm.controls['password'].setValue(this.editDataProf.password);
          this.ProForm.controls['grade'].setValue(this.editDataProf.grade);
          this.ProForm.controls['sexe'].setValue(this.editDataProf.sexe);
          this.ProForm.controls['specialite'].setValue(this.editDataProf.specialite);
          this.ProForm.controls['adress'].setValue(this.editDataProf.adress);
          this.ProForm.controls['email'].setValue(this.editDataProf.email);
        }
    }
    /*this form is for students[étudiant]*/

    if (this.CurrentURL=='/dirassati/etudiant'){
      this.EtudForm = this.formBuilder.group({
        nom :['',Validators.required],
        prenom:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        sexe:['',Validators.required],
        adress :['',Validators.required],
        cne:['',Validators.required]
      })
      if(this.editDataEtud){
        this.actionBtn="Update"
        this.EtudForm.controls['nom'].setValue(this.editDataEtud.nom);
        this.EtudForm.controls['prenom'].setValue(this.editDataEtud.prenom);
        this.EtudForm.controls['email'].setValue(this.editDataEtud.email);
        this.EtudForm.controls['password'].setValue(this.editDataEtud.password);
        this.EtudForm.controls['sexe'].setValue(this.editDataEtud.sexe);
        this.EtudForm.controls['adress'].setValue(this.editDataEtud.adress);
        this.EtudForm.controls['cne'].setValue(this.editDataEtud.cne);
      }

    }

    if(this.CurrentURL=='/dirassati/admin'){
      this.AdminForm = this.formBuilder.group({
        nom :['',Validators.required],
        prenom:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        sexe:['',Validators.required],
        adress :['',Validators.required],
        fonction:['',Validators.required]
      })
    }



  }
/*for profs*/
  addProf(){
    if(!this.editDataProf){
      if(this.ProForm.valid){
        this.authService.AddProf(this.ProForm.value)
          .subscribe({
            next:(res)=>{
              alert("Prof Added");
              this.ProForm.reset();
              this.dialogRef.close('save');

            },
            error:(err)=>{
              console.log(err)
            }
          })
      }
    }else{
      this.UpdateProf();
    }
  }
  UpdateProf(){
    this.authService.putProduct(this.ProForm.value,this.editDataProf.id)
      .subscribe({
      next:  (res)=>{
      alert("Product Updated")
      this.ProForm.reset();
      this.dialogRef.close('updated');
    }, error:(err)=>{
        alert("error")
        }
      })

  }
  /*for Etudiant*/
  addEtud(){
    if(!this.editDataProf){
      if(this.EtudForm.valid){
        this.authService.postEtud(this.EtudForm.value)
          .subscribe({
            next:(res)=>{
              alert("etudiant added")
              this.EtudForm.reset();
              this.dialogRef.close('EtudSaved')
            }
          })
      }
    }else{
      this.updateEtud();
    }

  }

  updateEtud(){
   this.authService.putEtud(this.EtudForm.value,this.editDataEtud.id)
     .subscribe({
       next:(res)=>{
         alert("Product Updated")
         this.EtudForm.reset();
         this.dialogRef.close('Etudupdated');
       }, error:(err)=>{
         alert("error")
       }
     })
  }
/*for Admin*/
addAdmin(){
  if(this.AdminForm.valid){
    this.authService.postAdmin(this.AdminForm.value)
      .subscribe({
        next:(res)=>{
          alert("Administrator Added");
          this.AdminForm.reset();
          this.dialogRef.close('AdminSaved')
        }
      })
  }
}

}
