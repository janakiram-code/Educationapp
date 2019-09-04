import { Component, OnInit ,Inject} from '@angular/core';
import {Http} from "@angular/http";
import { ServedataService } from '../servedata.service';
import { retry, delay, take } from 'rxjs/operators'

@Component({
  selector: 'app-studentreg',
  templateUrl: './studentreg.component.html',
  styleUrls: ['./studentreg.component.css']
})
export class StudentregComponent implements OnInit {
  stdregno;stdname;stdclass;stdfaname;stdaddr;stdpwd;stddata;page1;pages=1;totrec
  constructor(@Inject(Http) public ht,private _servData:ServedataService) {
    this.Getstudent()
   }
  ngOnInit() {
    this.getLastregno()
    //this.stdregno='reg-100001'
  }
  regstudent(){
    let password1=this.stdname.substring(0,4);
    this.stdpwd=password1+'@123';
    var ob={_id:this.makeid(),stdregno:this.stdregno,stdname:this.stdname,stdclass:this.stdclass,
      stdfaname:this.stdfaname,stdaddr:this.stdaddr,stdpwd:this.stdpwd}
      this._servData.InsertRecord(ob,"./file1refvar/regstd").subscribe(
        dt=>{
          alert(dt)
          window.location.reload();
        }
      )
  }
  sendmail(){
    this.ht.get("./file1refvar/sendmails").subscribe(dt=>{
      alert(dt._body)
    })
  }
  Getstudent(){
    this._servData.getStudent().subscribe(dt=>{
        this.stddata=(dt),
        this.totrec=this.stddata.length;
        this.totrec=Math.round(this.totrec/5);
        err=>console.log(err)
    })
  }
  getLastregno(){
    this._servData.getLastregno1().subscribe(
      dt=>{let val=(dt)
      let val2=val[0]['max'].substring(4,10)
      val2=parseInt(val2)+1;
      let val3=val[0]['max'].substring(0,4)+val2
      this.stdregno= val3
    }
    )
  }
   makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
  getNext(page){
    if(page== undefined || page=='') page=0
    if(this.page1 !==this.totrec)this.page1=parseInt(page)+1;
    this.pages=this.page1;
  }
  getPrevious(page){
   // alert(page)
   if(page>1)this.page1=parseInt(page)-1;
    this.pages=this.page1;
  }
}
