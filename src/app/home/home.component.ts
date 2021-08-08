import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../model/user';


@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   form!: FormGroup ;
   model= new User()

  constructor(
    private formBuilder: FormBuilder,
  ) {

   }
   buildForm() {
    this.form = this.formBuilder.group({

      Name: ['', Validators.required],
      Mobile: ['', Validators.required],
      Username:['',Validators.required],
      Password:['',Validators.required],

    },
    );

  }
  ngOnInit(): void {
    this.buildForm();
  }
  onSubmit(){
    console.log(this.model);
  }

}
