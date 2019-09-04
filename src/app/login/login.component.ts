import { Component, OnInit,Inject } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from "@angular/http"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checklogin;
  constructor(@Inject(Router) public rt,@Inject(Http) public ht) {
    this.txttype='';
    var url=window.location.href;
    var url1=url.split("/#/")
    this.login=url1[1]
   }
  ngOnInit() {
    this.checklogin=localStorage.getItem("checklogin");
  }
  txtemail;txtpwd;login;txttype;a;
  loginvalid(searchValue){
    //console.log(searchValue);
   var ob={stdname:this.txtemail,stdpwd:this.txtpwd}
    this.ht.post("/file2ref/met2",ob).subscribe(dt=>{this.login=JSON.parse(dt._body)
      if(this.login.length >0 && this.login !==undefined){
        //alert('2nd time'+this.login)
        this.rt.navigate(["./menu"])
         document.getElementById("div1").style.display='none'
         localStorage.setItem("checklogin", "Logged");
         //localStorage.removeItem("login")
        //this.login=true;
        console.log(this.checklogin)
      }
      else{
        alert("Invalid Credintioals");
        alert(this.login);
      }
    }),function(){
    }
    //if(this.login==undefined)this.login=0;
  }
  getsess(){
    this.ht.get("/file2ref/getsessionlogin1").subscribe(
      dt=>{let val=(dt._body)
      alert(val)
    }
    )
  }
  loginApp(){
    
    //document.getElementById("div1").style.display='block'
    //this.login=false;
  }
}
