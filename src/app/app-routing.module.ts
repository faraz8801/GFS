import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { EngagementComponent } from './engagement/engagement.component';
import { FinancialServicesComponent } from './financial-services/financial-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FAQsComponent } from './faqs/faqs.component';

const routes: Routes = [

{

  path: '',
  component: LoginComponent
}
,
{
  path:'registration',
  component:RegistrationComponent
}
,


{

  path:'home',
  component: HomeComponent
},

{

  path:'engagement',
  component: EngagementComponent
},

{

  path:'finacial-services',
  component:FinancialServicesComponent
},

{
path:'Contact-Us',
  component: ContactUsComponent
},

{
  path:'About-Us',
    component: AboutUsComponent
  },

  {
    path:'FAQs',
      component: FAQsComponent
    },

{
  path:'footer',
  component: FooterComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
