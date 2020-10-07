import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';

import { ServiceComponent } from './service/service.component';
import { VegAndFruitsComponent } from './veg-and-fruits/veg-and-fruits.component';
import { BeuityParComponent } from './beuity-par/beuity-par.component';
import { BodymassageComponent } from './bodymassage/bodymassage.component';
import { SpaComponent } from './spa/spa.component';
import { HomeAllComponent } from './home-all/home-all.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ElectricComponent } from './electric/electric.component';
import { CameraComponent } from './camera/camera.component';
import { MobileComponent } from './mobile/mobile.component';
import { UrbanAutoComponent } from './urban-auto/urban-auto.component';
import { TravlingComponent } from './travling/travling.component';
import { PaintComponent } from './paint/paint.component';
import { DesignComponent } from './design/design.component';
import { PlumberComponent } from './plumber/plumber.component';
import { HomePaintingComponent } from './home-painting/home-painting.component';
import { PestControlComponent } from './pest-control/pest-control.component';
import { WheelerComponent } from './wheeler/wheeler.component';
import { LadiesComponent } from './ladies/ladies.component';
import { TVComponent } from './tv/tv.component';
import { ComputerComponent } from './computer/computer.component';
import { NeedComponent } from './need/need.component';
import { AcComponent } from './ac/ac.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {path:'' ,component:LoginComponent},
  {path:'loginsuccess' ,component:LoginsuccessComponent},
  {path:'registration' ,component:RegistrationComponent},
  {path:'login' ,component:LoginComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'service' ,component:ServiceComponent},
  {path:'vegandfruit' ,component:VegAndFruitsComponent},
  {path:'beuity' ,component:BeuityParComponent},
  {path:'body' ,component:BodymassageComponent},
  {path:'spa' ,component:SpaComponent},
  {path:'homeall' ,component:HomeAllComponent},
  {path:'Electronics' ,component:ElectronicsComponent},
  {path:'Electric' ,component:ElectricComponent},
  {path:'Camera' ,component:CameraComponent},
  {path:'Mobile' ,component:MobileComponent},
  {path:'Urban' ,component:UrbanAutoComponent},
  {path:'Travling' ,component:TravlingComponent},
  {path:'Paint' ,component:PaintComponent},
  {path:'Design' ,component:DesignComponent},
  {path:'Plumber' ,component:PlumberComponent},
  {path:'home_paint' ,component:HomePaintingComponent},
  {path:'pestcontroller' ,component:PestControlComponent},
  {path:'Wheeler' ,component:WheelerComponent},
  {path:'ladies' ,component:LadiesComponent},
  {path:'tv' ,component:TVComponent},
  {path:'computer' ,component:ComputerComponent},
  {path:'need' ,component:NeedComponent},
  {path:'ac' ,component:AcComponent},
  {path:'about' ,component:AboutUsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
