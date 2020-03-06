import { Component, OnInit } from '@angular/core';
//import jsonData from '../login.json';
import jsonData from '../sign-up.json';
import { signupModel } from './sign-up.model';

@Component({
  selector: 'app-login',
  template: '<p id="login-page"></p>',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  txt: string;
  qualifications: any;
  newOption: any;
  opt: any;
  data = jsonData;
  studentDetail: signupModel;
  //studentDetail: signupModel[] = [];
  
  constructor() { 
    this.txt = "";
    this.qualifications = "";
    this.studentDetail = new signupModel();
    //this.studentDetail.address='wjdygwye';
  }

  ngOnInit() {
    for (var i in this.data) {
      if(this.data[i].tag == "input")
      {
        this.txt += "<div>";
        this.txt += "<label>" + this.data[i].Label + "</label>";
        this.txt += "<input type ="+ this.data[i].Type+">" ;
        this.txt += "</div>";  
      }  
      if(this.data[i].tag == "textarea")
      {
        this.txt += "<div>";
        this.txt += "<label>" + this.data[i].Label + "</label>";
        this.txt += "<textarea rows='3' cols='33' ngModel="+this.studentDetail.address+"></textarea>" ;
        this.txt += "</div>";  
      }  
      if(this.data[i].tag == "select")
      {
        this.txt += "<div>";
        this.txt += "<label>" + this.data[i].Label + "</label>";
        this.txt += "<select id='qualification'></select>" ;
        this.txt += "</div>";  
      }  
      
    }

    this.txt += "<button type ="+ this.data[i].Type+" click ='onSubmit()'>" + this.data[i].Label + "</button>";
    document.getElementById("login-page").innerHTML = this.txt;

  this.qualifications = document.getElementById('qualification');

// Loop for dropdown option value
    for(var j in this.data){
      if(this.data[j].Value){
        this.opt = this.data[j].Value;       
        for(var k in this.opt){
          this.newOption = document.createElement("option");
          this.newOption.value = this.opt[k];
          this.newOption.text = this.opt[k];
          this.qualifications.add(this.newOption);
        }
      }
    }

  }

  /** 
   * Method for display student detail
   */
  onSubmit(){
    //this.studentDetail.push();
    console.log(this.studentDetail.address);

  }

}
