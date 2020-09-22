import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }
  
  public loginUserFormRemot(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/api/auth/signin",user)
    }

    
  public registerUserFormRemot(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/api/auth/signup",user)
    }
}
