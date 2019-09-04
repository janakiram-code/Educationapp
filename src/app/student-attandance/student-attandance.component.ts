import { Component, OnInit,Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-student-attandance',
  templateUrl: './student-attandance.component.html',
  styleUrls: ['./student-attandance.component.css']
})
export class StudentAttandanceComponent implements OnInit {
  arr;yymm;class1;days;stddata;class2;day;aaa;
  qtd = {};

  constructor(@Inject(Http) public ht) {
    this.yymm=''
    this.class1=''
    this.class2=''
    var d = new Date();
    var year= d.getFullYear();
    var month= d.getMonth();
     this.arr=[{'uname':''}]
    for(let i=1;i<=month;i++){
       this.arr.push({'uname':"0"+i+year})
    }
    //alert(arr)
      this.arr.splice(0,1)
      this.days=d.getDate();
      /*for(let i=1;i<=31;i++){
        this.days.push(['day'+i])
      }*/
   }
 
  ngOnInit() {
  }
  //creating For Attandance.................
  createattandance(){
    if(this.yymm==='' || this.class1==''){
    alert('YYMM and class arre mandatory.............');
    return false;
    }
    var ob={'stdcls':this.class1,'yymm':this.yymm}
    this.ht.post("./file1refvar/createattandance",ob).subscribe(dt=>{
      alert((dt._body))
    })
  }
  //Ending creating Attandance..................
  //Updating student Attandance..............
  insertAttandance(){
    var ob={'stdclass':this.class2,'day':this.day,'yymm':this.yymm}
    this.ht.post("./file1refvar/gettattandance",ob).subscribe(
      dt=>{this.stddata=JSON.parse(dt._body)
      
      })
  }
  //Ending Student Attandance.....................
  getFormData(formref){
    //alert(formref.value[])
    //console.log(formref.value['7CpwP'])
    let len=this.stddata.length
    var d=new Date();
    if(d.getDate()<10) var ab='day0'+d.getDate(); 
    else var ab='day'+d.getDate();  
    var ob=[{'_id':'',[ab] :''}]
    for(let a=0;a<len;a++){
      if(formref.value[this.stddata[a]['_id']]==true) ob.push({'_id':this.stddata[a]['_id'],[ab]:'P'})
      else ob.push({'_id':this.stddata[a]['_id'],[ab]:'A'})
    }
    ob.splice(0,1)
    this.ht.post("./file1refvar/updateAttandance",ob).subscribe(
      dt=>{alert(dt._body)}
    )
  }
}