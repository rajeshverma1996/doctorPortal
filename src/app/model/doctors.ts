export class Doctor{
  Name!: string;
  MobileNo!:number;
  Username!: string;
  Password!: string;
}

export class DoctorsDetails{
  id!: number;
  Name!: string;
  MobileNo!:number;
  Username!: string;
  Password!: string;

  constructor(data:any){
    this.id = data.id;
    this.Name = data.Name;
    this.MobileNo = data.MobileNo;
    this.Username = data.Username;
    this.Password = data.Password;
  }
}
