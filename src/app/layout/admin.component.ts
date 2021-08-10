import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Key_Name, Message } from "../constrants/AllConstrant";

@Component({

  templateUrl:'admin.component.html'
})
export class AdminComponent{
  constructor(
    private router:Router,
  ){}
  onLogout(){
    if (confirm(Message.Logout_Message)) {
        localStorage.removeItem(Key_Name.currentUser);
        this.router.navigateByUrl('/');
        return true
        }else
        return false
  }
}
