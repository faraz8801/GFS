import { Component } from '@angular/core';
import { MyServicesService } from '../Services/my-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private register:MyServicesService){}

  passwordWindow=false;
  passwordLogin(){
    this.passwordWindow=!this.passwordWindow;
    
    

  }

  OTPFieldVisible=false;
  enterOTP(){

   this.OTPFieldVisible=!this.OTPFieldVisible;
  }


}
