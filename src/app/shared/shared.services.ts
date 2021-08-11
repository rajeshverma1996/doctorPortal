import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
import { Key_Name, ServiceBaseApi } from "../constrants/AllConstrant";
import { Doctor } from "../model/doctors";
import { Patient } from "../model/patient";

@Injectable()
export class SharedServices {
  baseApi = ServiceBaseApi.BaseApi;

  public baseServiceApi = this.baseApi + '/';
  private addGetDoctorUrl = Key_Name.doctors;
  private addGetPatientUrl = Key_Name.patients;


  constructor(
    private _httpClient: HttpClient
  ) { }

  getDoctors(): Observable<any> {
    debugger
    return this._httpClient.get(this.baseServiceApi + this.addGetDoctorUrl)
      .pipe(map(res => res))
  }


  AddDoctor(data: Doctor): Observable<any> {
    // const body = JSON.stringify(data);
    return this._httpClient.post(this.baseServiceApi + this.addGetDoctorUrl, data) // ...using post request
      .pipe(
        map(res => res)
      )
  }

  getAllPatients():Observable<any>{
    return this._httpClient.get(this.baseServiceApi + this.addGetPatientUrl)
      .pipe(map(res => res))
  }
  getPatientDetailsById(id:number):Observable<any>{
    return this._httpClient.get(this.baseServiceApi + this.addGetPatientUrl+'/'+id)
      .pipe(map(res => res))
  }
  AddPatient(data: Patient): Observable<any> {
    // const body = JSON.stringify(data);
    return this._httpClient.post(this.baseServiceApi + this.addGetPatientUrl, data) // ...using post request
      .pipe(
        map(res => res)
      )
  }

  DeletePatient(id:number){
    return this._httpClient.delete(this.baseServiceApi + this.addGetPatientUrl+'/'+id)
      .pipe(map(res => res))
  }
  UpdatePatient(data: Patient): Observable<any> {
    // const body = JSON.stringify(data);
    return this._httpClient.put(this.baseServiceApi + this.addGetPatientUrl+ '/'+data.id, data) // ...using post request
      .pipe(
        map(res => res)
      )
  }

}
