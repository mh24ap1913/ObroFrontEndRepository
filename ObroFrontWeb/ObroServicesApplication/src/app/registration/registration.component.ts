import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
user=new User();
msg=" ";
  constructor(private _service:RegistrationService, private  _router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this._router.navigate[('/login')];
    this._service.registerUserFormRemot(this.user).subscribe(
      data=>{
         console.log("response are received");
         this.msg="Registration Succesfully";
       
     },
      error=>
       {console.log("Exception occured");
      this.msg=error.error;
    
     }
    );
  }
  }
  
  