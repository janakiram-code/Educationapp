import { Component, OnInit,Inject } from '@angular/core';
import {Http} from "@angular/http"

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  a;
  constructor(@Inject(Http) public ht) { }

  ngOnInit() {
  }
  fun1(){
    this.ht.get("file1refvar/getsessionlogin").subscribe(dt=>{this.a=dt._body
      alert(dt._body)
      
    }),function(){
      alert("failed");
    }
  }
}
