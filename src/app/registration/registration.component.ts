import { Component } from '@angular/core';
import { MyServicesService } from '../Services/my-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  constructor(private register:MyServicesService){}

  facebook="/src/assets/images/facebook.png"


  isOTPVisibleEmail=false;
  isOTPVisibleMobile=false;


  otpforEmail(){

    this.isOTPVisibleEmail=!this.isOTPVisibleEmail;
  }

  otpforMobile(){
    this.isOTPVisibleMobile=!this.isOTPVisibleMobile;

  }

  

  groupReg=false;

  registration(){

    this.groupReg=!this.groupReg
  }

  
  SignUp(data:object){

    this.register.userSignup(data).subscribe((result:any)=>{

      console.log(result)
    })
    


  }



 

}
