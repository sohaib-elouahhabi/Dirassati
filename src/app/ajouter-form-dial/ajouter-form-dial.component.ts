import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthServiceService } from '../Services/auth-service.service';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-ajouter-form-dial',
  templateUrl: './ajouter-form-dial.component.html',
  styleUrls: ['./ajouter-form-dial.component.scss']
})
export class AjouterFormDialComponent implements OnInit{

  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthServiceService,
    private dialogRef : MatDialogRef<AjouterFormDialComponent>,
    @Inject(MAT_DIALOG_DATA) public editData : any
    ){}


  ProForm !: FormGroup;
  actionBtn : string ="Save"
  ngOnInit(): void {
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
    if(this.editData){
      this.actionBtn="Update"
      this.ProForm.controls['nom'].setValue(this.editData.nom);
      this.ProForm.controls['prenom'].setValue(this.editData.prenom);
      this.ProForm.controls['password'].setValue(this.editData.password);
      this.ProForm.controls['grade'].setValue(this.editData.grade);
      this.ProForm.controls['sexe'].setValue(this.editData.sexe);
      this.ProForm.controls['specialite'].setValue(this.editData.specialite);
      this.ProForm.controls['adress'].setValue(this.editData.adress);
      this.ProForm.controls['email'].setValue(this.editData.email);
    }
  }

  addProf(){
    if(!this.editData){
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
    this.authService.putProduct(this.ProForm.value,this.editData.id)
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

}
