import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../model/login';

import { SharedServices } from '../shared/shared.services';
import { map, clone } from 'underscore';
import { Router } from '@angular/router';
import { Key_Name } from '../constrants/AllConstrant';
import { DoctorsDetails } from '../model/doctors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup ;
   model= new Login();
  IsLoading!: boolean;
  IsFailed!: boolean;
  message!: string;
  constructor(
    private formBuilder: FormBuilder,
    private sharedService:SharedServices,
    private router:Router
  ) { }
  buildForm() {
    this.form = this.formBuilder.group({


      Username:['',Validators.required],
      Password: ['',Validators.required],


    },

    );

  }
  ngOnInit(): void {
    this.IsFailed = false;
    this.message = '';
    this.buildForm();
  }
  onLogin(){
    this.IsLoading = true;
    this.sharedService.getDoctors().subscribe(
      data =>{
        const userData:DoctorsDetails[] = []
        map(data, item => {
          if (item) {
              userData.push(new DoctorsDetails(item));
          }
      });
      if(userData.length){
       const index=  userData.findIndex(user =>user.Username === this.model.Username && user.Password === this.model.Password);
       if(index > -1){
         this.IsFailed = false;
         localStorage.setItem(Key_Name.currentUser,JSON.stringify(userData[index]))
        this.router.navigateByUrl('admin');
       }else{
        this.IsFailed = true;
        this.message = 'Invalid Credential'
       }
      }else{
        this.IsFailed = true;
        this.message = 'No Data Found'
      }
      this.IsLoading = false;

      },
      error =>{
        this.IsFailed = true;
        this.IsLoading = false;
        this.message = 'Some Technical Issue , Please try after sometimes'
      }
    )
  }

}
