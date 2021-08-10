import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { clone, map } from "underscore";
import { Message } from "../constrants/AllConstrant";
import { Patient, PatientDetails } from "../model/patient";
import { SharedServices } from "../shared/shared.services";
import { FormAsynValidator } from "../validator";

@Component({
  templateUrl:'patient.component.html'
})
export class PatientComponent implements OnInit{
  @ViewChild('closeBtn', { static: true }) closeBtn!: ElementRef;
  @ViewChild('addPatientBtn', { static: true }) addPatientBtn!: ElementRef;
  form!: FormGroup ;
  model= new Patient();
   IsLoading!: boolean;
   IsAdded!: boolean;
   message:string = '';
   searchText:string='';
   IsUpdate!:boolean;
patienDetails:PatientDetails[]=[]
  filterPatients: any;
  constructor(private sharedService:SharedServices,
    private formBuilder: FormBuilder,
    private formAsynValidator:FormAsynValidator,
    private router: Router
              ){}
  ngOnInit(){
    this.buildForm();
    this.getAllPatient();

  }
  buildForm() {
    this.form = this.formBuilder.group({

      Name: ['', Validators.required],
      Mobile: ['', Validators.required,this.formAsynValidator.mobileValidator()],
      Age:['',Validators.required],
      gender: ['',Validators.required],
      Symptom:['',Validators.required]
    },
    );

  }
  getAllPatient(){
    this.sharedService.getAllPatients().subscribe(
      data =>{
        const proarry: PatientDetails[] = [];
        this.patienDetails =this.filterPatients= [];
        map(data, item => {
          if (item) {
              proarry.push(new PatientDetails(item));
          }
      });
      this.patienDetails = [...proarry];
      this.filterPatients = [...this.patienDetails];
      console.log(this.patienDetails);

      },
      err => console.log(err)
    )
  }
  SearchPatient() {
    if (!this.searchText) {
        this.filterPatients = [...this.patienDetails];
    } else {
        this.filterPatients = [];
        this.filterPatients = this.patienDetails.filter((item) => {
            return ((new RegExp(this.searchText, 'i').test(item.Name)) || (new RegExp(this.searchText, 'i').test(item.MobileNo))
           );
        });
    }

  }


  onSubmit(){
    this.message = '';
    this.IsLoading = true;
    console.log(this.model);

    this.sharedService.AddPatient(this.model).subscribe(data =>{
      this.getAllPatient();
      this.IsAdded = true;
      this.message = Message.Success_Msg
      console.log(data);

      this.closeBtn.nativeElement.click();
      this.IsLoading = false;
      setTimeout(()=>{
        this.IsAdded = false;
        this.message = '';
      },2*1000)
    },
    err=>{
      this.IsLoading = false;
      this.message = Message.Error_Msg;
      console.log(err);
      return throwError(err)
    })

  }

  resetForm(){
    this.IsUpdate = false;
    this.form.reset();
    this.model = new Patient();
  }
  onClickDetails(patientid:number){
    this.router.navigateByUrl('admin/patientDetails', { state: { id:patientid }  });
  }
  onClickDelete(id:number){
    if (confirm(Message.Delete_Confirm_Msg)) {
      this.sharedService.DeletePatient(id).subscribe(
        data =>{
          this.IsAdded = true;
          this.message = Message.Delete_Msg
          console.log(data);
          setTimeout(()=>{
            this.IsAdded = false;
            this.message = '';
          },2*1000)
          this.getAllPatient();
        },
        error =>{
          console.log(error);
        }
      )
      return true
      }else
      return false

  }

  onClickEdit(data:any){
    this.IsUpdate = true;
    const patient = clone(data);
    this.model = patient;
    this.addPatientBtn.nativeElement.click();

  }
  onUpdate(){
    this.message = '';
    this.IsLoading = true;
    console.log(this.model);

    this.sharedService.UpdatePatient(this.model).subscribe(data =>{
      this.getAllPatient();
      this.IsAdded = true;
      this.message = Message.Update_Msg
      console.log(data);
      this.closeBtn.nativeElement.click();
      this.IsLoading = false;
      setTimeout(()=>{
        this.IsAdded = false;
        this.message = '';
      },2*1000)
    },
    err=>{
      this.IsLoading = false;
      this.message = Message.Error_Msg;
      console.log(err);
      return throwError(err)
    })
  }
}
