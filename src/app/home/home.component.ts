import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Doctor } from '../model/doctors';

import { SharedServices } from '../shared/shared.services';
import { FormAsynValidator } from '../validator';


@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   form!: FormGroup ;
   model= new Doctor();
   IsLoading!: boolean;
   IsAdded!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private formAsynValidator:FormAsynValidator,
    private sharedService:SharedServices,
    private router: Router,
    private activedRouter: ActivatedRoute,
  ) {

   }
   buildForm() {
    this.form = this.formBuilder.group({

      Name: ['', Validators.required],
      Mobile: ['', Validators.required,this.formAsynValidator.mobileValidator()],
      Username:['',Validators.required,this.formAsynValidator.UsernameValidator()],
      Password: ['', Validators.compose([Validators.required, null, (control) => this.formAsynValidator.passwordValidate(control)])],
      Confirmpassword: ['', Validators.required],

    },
    { validator: this.formAsynValidator.matchingPasswords('Password', 'Confirmpassword') }
    );

  }
  ngOnInit(): void {
    this.IsAdded = false;
    this.IsLoading = false;
    this.buildForm();
   // this.getDoctors();
  }
  onSubmit(){
    this.IsLoading = true;
    console.log(this.model);

    this.sharedService.addDoctor(this.model).subscribe(data =>{
      this.IsAdded = true;
    setTimeout(()=>{
      this.router.navigate(['/login'], { relativeTo: this.activedRouter });
    //  this.IsAdded = false;
    //  this.IsLoading = false;
    },2*1000);

      this.form.reset();
      this.model = new Doctor();
      console.log(data);
      this.getDoctors();
      return true;
    },
    error=>{
      this.IsLoading = false;
      console.log(error);
      return throwError(error)
    })
  }

  getDoctors(){
    console.log(this.model);
    this.sharedService.getDoctors().subscribe(data =>{
      console.log(data);
      return true;
    },
    error=>{
      console.log(error);
      return throwError(error)
    })

  }


}
