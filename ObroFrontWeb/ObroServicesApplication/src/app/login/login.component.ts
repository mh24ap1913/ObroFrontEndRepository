import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user =new User();
  msg='';
  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFormRemot(this.user).subscribe(
      data=>{
        console.log("response are received");
        this._router.navigate[('/loginsuccess')]
    },
      error=>
      {console.log("Exception occured");
      this.msg="Bad Credential , please enter valid username and password";
    
    }
    );
    }
    gotoregistration(){
      this._router.navigate[('/registration')]
    }
        
}
