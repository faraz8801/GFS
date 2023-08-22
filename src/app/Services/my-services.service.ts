import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  constructor(private http:HttpClient) { }


  userSignup(data:object){

    return this.http.post('http://localhost:3000/user',data)


  }


  



}
