import { Component, OnInit } from '@angular/core';
import jsonData from '../login.json';
//import jsonData from '../sign-up.json';
import { signupModel } from './sign-up.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data = jsonData;
  studentDetail: signupModel;
  isErrorUsername:boolean;
  isErrorPassword:boolean;
  isErrorTermsAccepted: boolean;

  constructor() { 
    this.studentDetail = new signupModel();
    this.isErrorPassword=false;
    this.isErrorUsername=false;
    this.isErrorTermsAccepted = false;
  }  

  ngOnInit() {
  }

  /**
   * Method to set the value of username,password & isTermsAccepted.
   * @param ev Event to set the value of input type.
   */
  setInputValue(ev){
    this.validateCredential();
    if(ev.target.type=='text'){
      this.studentDetail.username=ev.target.value;      
    }
    else if(ev.target.type=='password'){
      this.studentDetail.password=ev.target.value;           
    }else{
      this.studentDetail.isTermsAccepted=ev.target.checked;
    }
  }

  validateCredential(){
    if(this.studentDetail.username && this.studentDetail.username.trim().length>0){
      this.isErrorUsername=false;
    }     
    else{
      this.isErrorUsername=true;
    }
    if(this.studentDetail.password && this.studentDetail.password.trim().length > 5){
      this.isErrorPassword=false;
    }     
    else{
      this.isErrorPassword=true;
    } 
    if(this.studentDetail.isTermsAccepted){
      this.isErrorTermsAccepted = false;
    }
    else{
      this.isErrorTermsAccepted = true;
    }
  }

  /** 
   * Method for display student detail.
   */
  onSubmit(){    
    this.validateCredential();
    console.log(this.studentDetail);
  }
}
