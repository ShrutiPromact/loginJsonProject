import { Component, OnInit } from '@angular/core';
//import jsonData from '../login.json';
import jsonData from '../sign-up.json';
import { signupModel } from './sign-up.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data = jsonData;
  studentDetail: signupModel;
  isError:boolean;
  
  constructor() { 
    this.studentDetail = new signupModel();
    this.studentDetail.qualification="BE";
    this.isError=false;
  }  

  ngOnInit() {
  }

  /**
   * Method to set the value of username,password & isTermsAccepted.
   * @param ev Event to set the value of input type.
   */
  setInputValue(ev){
    if(ev.target.type=='text'){
      this.studentDetail.username=ev.target.value;

    }
    else if(ev.target.type=='password'){
      this.studentDetail.password=ev.target.value;
    }else{
      this.studentDetail.isTermsAccepted=ev.target.checked;
    }

  }

  /** 
   * Method for display student detail.
   */
  onSubmit(){
    if(this.studentDetail.username.trim().length<=0 && this.studentDetail.username ==="undefined"){
      this.isError=true;
    }
    if(this.studentDetail.password.trim().length<=6 && this.studentDetail.password ==="undefined"){
      this.isError=true;
    }
    console.log(this.studentDetail);
  }
}
