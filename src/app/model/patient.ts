
export class Patient{
  id!:number;
  Name!:string;
  MobileNo!: string;
  Gender:string='M';
  Age!:number;
  Symptom!:string;
}

export class PatientDetails{
  id!:number;
  Name!:string;
  Gender!:string;
  Age!:number;
  Symptom!:string;
  MobileNo!: string;

  constructor(data:any){
    this.id = data.id;
    this.Name = data.Name;
    this.Gender = data.Gender;
    this.Age = data.Age;
    this.Symptom = data.Symptom;
    this.MobileNo = data.MobileNo;
  }
}
