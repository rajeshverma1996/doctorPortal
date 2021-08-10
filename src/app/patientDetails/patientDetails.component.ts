import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PatientDetails } from "../model/patient";
import { SharedServices } from "../shared/shared.services";

@Component({
  templateUrl:'patientDetails.component.html'
})
export class PatientDetailsComponent implements OnInit{
  state$!: Observable<any>;
  patientId!: number;
  patientDetails!: PatientDetails;
  constructor(private sharedService:SharedServices,
    private activatedRoute: ActivatedRoute,
    private router:Router
    ){

  }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap
    .pipe(map(() => window.history.state))
  this.state$.subscribe(
      data =>{

          this.patientId = data.id;
          if(this.patientId){
          console.log(this.patientId);
          this.getPatientDetails(this.patientId);
        }else{
          this.router.navigateByUrl('admin/patient');
        }

      }
    )

  }

  getPatientDetails(id:number){
    this.sharedService.getPatientDetailsById(id).subscribe(
      data =>{
        if(data){
          this.patientDetails = new PatientDetails(data);

        }
        console.log(data)
      },
      error =>{
        console.log(error)
      }
    )
  }


}
