import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthServiceService } from '../Services/auth-service.service';
import {error} from "@angular/compiler-cli/src/transformers/util";
import { Router } from '@angular/router';
import {ListProfComponent} from "../modules/landing/components/list-prof/list-prof.component";
import Swal from "sweetalert2";

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
    @Inject(MAT_DIALOG_DATA) public editDataEtud : any,
    @Inject(MAT_DIALOG_DATA) public adminDataEdit : any,
    @Inject(MAT_DIALOG_DATA) public coursesDataEdit : any,
    @Inject(MAT_DIALOG_DATA) public emploieEditData : any,
    private router : Router
    ){ }


  Groupe : any;
  professors :any;
  cours : any;
  /***************************/
  datetime : any;
  datetime2:any;
  /************/
  ProForm !: FormGroup;
  EtudForm !: FormGroup;
  AdminForm !: FormGroup;
  CoursesForm !:FormGroup;
  emploie !: FormGroup;
  actionBtn : string ="Save"
  ngOnInit(): void {
    /*this is to get current url*/
    this.CurrentURL = this.router.url;
    console.log(this.CurrentURL);
    /********************/
    this.getGroup();
    this.getProfNamesandID();
    this.getcoursesAndID();

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
        cne:['',Validators.required],
        groupe_id:['',Validators.required]

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
        this.EtudForm.controls['groupe_id'].setValue(this.editDataEtud.groupe_id);
      }

    }
/*this form is for admins[les administrateurs]*/
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
      if(this.adminDataEdit){
        this.actionBtn="Update"
        this.AdminForm.controls['nom'].setValue(this.adminDataEdit.nom);
        this.AdminForm.controls['prenom'].setValue(this.adminDataEdit.prenom);
        this.AdminForm.controls['email'].setValue(this.adminDataEdit.email);
        this.AdminForm.controls['password'].setValue(this.adminDataEdit.password);
        this.AdminForm.controls['sexe'].setValue(this.adminDataEdit.sexe);
        this.AdminForm.controls['adress'].setValue(this.adminDataEdit.adress);
        this.AdminForm.controls['fonction'].setValue(this.adminDataEdit.fonction);
      }
    }
/*this form is for courses[les cours]*/
    if(this.CurrentURL == '/dirassati/List-cours'){
      this.CoursesForm = this.formBuilder.group({
        nom_cours:['',Validators.required],
        Module:['',Validators.required],
        anne:['',Validators.required],
        designation_formation:['',Validators.required],
        enseigant_id:['',Validators.required],
        groupe_id:['',Validators.required] ,
      })
      if(this.coursesDataEdit){

        this.actionBtn="update Course"
        this.CoursesForm.controls['nom_cours'].setValue(this.coursesDataEdit.nom_cours);
        this.CoursesForm.controls['Module'].setValue(this.coursesDataEdit.Module);
        this.CoursesForm.controls['anne'].setValue(this.coursesDataEdit.anne);
        this.CoursesForm.controls['designation_formation'].setValue(this.coursesDataEdit.designation_formation);
        this.CoursesForm.controls['enseigant_id'].setValue(this.coursesDataEdit.enseigant_id);
        this.CoursesForm.controls['groupe_id'].setValue(this.coursesDataEdit.groupe_id);
      }
    }


    /*this form is for courses[les emploies]*/
    if(this.CurrentURL == '/dirassati/gestionEmploie') {
      this.emploie = this.formBuilder.group({
        Subject: ['', Validators.required],
        StartTime: ['', Validators.required],
        EndTime: ['', Validators.required],
        cour_id: ['', Validators.required]
      })
      if (this.emploieEditData) {
        this.actionBtn = "update Emploi"
        this.emploie.controls['Subject'].setValue(this.emploieEditData.Subject);
        this.emploie.controls['StartTime'].setValue(this.emploieEditData.StartTime);
        this.emploie.controls['EndTime'].setValue(this.emploieEditData.EndTime);
        this.emploie.controls['cour_id'].setValue(this.emploieEditData.cour_id);
      }

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
  if(!this.adminDataEdit){
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
  }else{
  this.UpdateAdmin()
  }

}

UpdateAdmin(){
  this.authService.putAdmin(this.AdminForm.value,this.adminDataEdit.id)
    .subscribe({
      next:(res)=>{
        alert("Admin Updated")
        this.EtudForm.reset();
        this.dialogRef.close('AdminUpdated');
      }
    })

}

/*for courses*/

addCourse(){
  if(!this.coursesDataEdit){
    this.authService.postCourse(this.CoursesForm.value)
      .subscribe({
        next:(res)=>{
          alert("course Added");
          this.CoursesForm.reset();
          this.dialogRef.close('CourseSaved')
        }
      })
  }else{
    this.updateCourse()
  }
}

updateCourse(){
  this.authService.putCourse(this.CoursesForm.value,this.coursesDataEdit.cours_id)
    .subscribe({
      next:(res)=>{
        alert("Admin Updated")
        this.EtudForm.reset();
        this.dialogRef.close('AdminUpdated');
      }
    })
}



/*for fetching group names for students*/
  getGroup(){
    this.authService.getGroup()
      .subscribe({
        next:(res)=>{
          this.Groupe = res;
        }
      })
  }

/*for fetching professor names*/
getProfNamesandID(){
  this.authService.getProfs()
    .subscribe({
      next:(res)=>{
        this.professors = res;
      }
    })
}
/*for getting courses and their id*/

  getcoursesAndID(){
    this.authService.getCourses()
      .subscribe({
        next:(res)=>{
          this.cours = res;
        }
      })
  }


/*for emploie*/
  addEmploi(){
    console.log(this.emploie.value)
    this.authService.addEmploi(this.emploie.value)
      .subscribe({
        next:(res)=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'emploie added!',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(res)
        },
        error:(err)=>{
          console.log(err)
        }
      })
  }






}
