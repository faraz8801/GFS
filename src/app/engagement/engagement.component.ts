import { Component } from '@angular/core';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.css']
})
export class EngagementComponent {


postVisible=false;
InputValue="";
CommentVisible=false;
  userPost(UserText:any){

    this.InputValue=UserText
    this.postVisible=!this.postVisible
    


  }

  comment(){
    this.CommentVisible=!this.CommentVisible

  }

}
