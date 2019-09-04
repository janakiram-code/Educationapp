import { Component, OnInit,Directive,ElementRef ,HostListener,Input } from '@angular/core';
import {FormBuilder,FormGroup,AbstractControl,Validator, Validators} from '@angular/forms'
import {ServedataService} from '../servedata.service'
//import 'rxjs/Rx';
import {of,pipe} from "rxjs";
import { filter, debounceTime, delay, map } from 'rxjs/operators';
/* @Directive({
  selector: '[appCustdirective]'
})
export class CustdirectiveDirective {
  @Input() hoverColor:string
  constructor(private el:ElementRef) {
    //el.nativeElement.style.backgroundColor="yellow"
   }
   @HostListener('mouseenter')onmouseenter(){
     this.hilitecolor(this.hoverColor)
   }
   @HostListener('mouseleave')onmouseleave(){
     this.hilitecolor("white")
   }
   hilitecolor(colors){
     this.el.nativeElement.style.backgroundColor=colors
     this.el.nativeElement.style.fontFamily="Impact,Charcoal,sans-serif"
       }
}
 */
@Component({
  selector: 'app-masterdata',
  
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.css']
  
})
export class MasterdataComponent implements OnInit {
  formData:FormGroup;formData1:FormGroup;looktypes;lookcode;uniquelooktype
  constructor(private fb:FormBuilder,private _servdata:ServedataService) { 
    //el.nativeElement.style.backgroundColor='yellow'
    this.getLooktypes()
    this.formData=this.fb.group({
      lookcode:["",Validators.required],
      lookname:["",Validators.required],
      looktype:["",Validators.required],
    })
  }
  ngOnInit() { 
    //this.searchBook()
    this.call()
   }
  InsertlookType(){
    this._servdata.InsertRecord(this.formData1.value,"/file1refvar/inslooktype").subscribe(data=>{
      alert(JSON.stringify(data))
    })
    this.formData1.reset();
  }
  call(){
  const Myobservable=of(1,2,3,4);
  const Myobserver={
    next:x=>{
      console.log("observables start here", +x)},
    error:err=>{
    console.log("Error happend",+err)},
    complete:()=>console.log("Notifications are done...")
  }
  Myobservable.subscribe(Myobserver)
  }
  searchBook(value) {
    //let value1=[value.target.value]
    const looktyp = { one: value.target.value};
    this._servdata.InsertRecord(looktyp,"/file1refvar/getlooktype1").subscribe(data=>{
      //console.log(data[0].lookname)
      //if(data[0].lookname!="")console.log(this.uniquelooktype['lookname'])
    })
  }
  CreateLookup(){
     this.formData1=this.fb.group({
       //,this.ValidateLookup
       lookcode:["",[Validators.required],[]],
       lookname:["",Validators.required],
       looktype:["looktype",Validators.required],
     })
  }
  getLooktypes(){
    this._servdata.getDbvalues("/file1refvar/getlooktypes").subscribe(data=>{
      this.looktypes=data;
    })
  }
  showpopup(){
    document.getElementById('popup1').style.display="block"
  }
  Copyval(){
    // code=document.getElementById("lookcode").value;
    //let name=document.getElementById("lookname").value=code;
  }
  ValidateLookup(control:AbortController){
     return this._servdata.InsertRecord(control,"/file1refvar/getlooktypes").pipe(
    delay(10000)).subscribe(data=>{
      console.log(data)
    })
    /* .map(lookups=>lookups|| [].filter(lookups=>{
      lookups.lookcode===control
    }).map(lookups=>!lookups.length))
    .map(res=>{return res ? null : {validLookup:true}});  */
  }

}
 //validate duplicate lookup
 function ValidateLookup1(control:AbstractControl){
 //console.log(control.value)
 if(control.value=="Maths") return null;
  else return { validUrl: true };
}
