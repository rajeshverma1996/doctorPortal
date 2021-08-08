import { Injectable } from "@angular/core";
import { User } from "../model/user";

@Injectable()
export class SharedServices{
private users:User[]=[];

getUsers(){
  return [...this.users]
}
  addUser(data:User){
   // localStorage.setItem()
    this.users.push(data);


  }
}
