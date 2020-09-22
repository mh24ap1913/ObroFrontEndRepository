import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  {path:'' ,component:LoginComponent},
  {path:'loginsuccess' ,component:LoginsuccessComponent},
  {path:'registration' ,component:RegistrationComponent},
  {path:'login' ,component:LoginComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'about' ,component:AboutComponent},
  {path:'service' ,component:ServiceComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
