import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import {CarouselModule} from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { ServiceComponent } from './service/service.component';
import { AgmCoreModule } from '@agm/core';
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
import { ServiceBookComponent } from './service-book/service-book.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './about-us/about-us.component';







@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    ContactComponent,
    ServiceComponent,
    VegAndFruitsComponent,
    BeuityParComponent,
    BodymassageComponent,
    SpaComponent,
    HomeAllComponent,
    ElectronicsComponent,
    ElectricComponent,
    CameraComponent,
    MobileComponent,
    UrbanAutoComponent,
    TravlingComponent,
    PaintComponent,
    DesignComponent,
    PlumberComponent,
    HomePaintingComponent,
    PestControlComponent,
    WheelerComponent,
    LadiesComponent,
    TVComponent,
    ComputerComponent,
    NeedComponent,
    AcComponent,
    ServiceBookComponent,
    AboutUsComponent,
    
  
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AgmCoreModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    NgbModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
