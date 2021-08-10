import { Component, OnInit } from "@angular/core";
import { Key_Name } from "../constrants/AllConstrant";
import { Doctor } from "../model/doctors";


@Component({

  templateUrl:'dashboard.component.html'
})
export class DashboardComponent implements OnInit{
  DoctorDetails = new Doctor();
  constructor(){}
  ngOnInit(){
    const userJson = localStorage.getItem(Key_Name.currentUser);
this.DoctorDetails = userJson !== null ? JSON.parse(userJson) : new Doctor();
    console.log(this.DoctorDetails)
  }

}
