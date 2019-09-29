import { Component, OnInit, Inject,HostListener } from '@angular/core';
import { FormArray,FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';
import { Http } from '@angular/http';
import { ServedataService } from '../../servedata.service';
import { CsstylesserviceService } from '../../csstylesservice.service';
function numericValidate(control:FormControl){
let value=control.value;
alert(value)
}

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {
  booksdata="";
  openform=false;
  lastbookid1;
  showmsg;
formData:FormGroup
  constructor(@Inject(Http) public ht,private fb:FormBuilder,private _servdata:ServedataService,private _CsstylesserviceService:CsstylesserviceService) {
    this.formData=this.fb.group({
      bookname:["",Validators.required],
     // bookid:["",Validators.required],
      class:["",""],
      purdate:["",Validators.required],
      rate:["",Validators.required,numericValidate],
      author:["",""],
      noofbooks:["",""],
      Status:["",""]
    })
   }
  ngOnInit() { 
    //console.log(this.lastbookid,"lastid....")
    this.getBooks()
  }
  //Insert Book Into Book Master
  InsertBook(){
    this.formData.value.bookid=this.getLastbookId()
    this._servdata.InsertRecord(this.formData.value,"./file3ref/insertbooks").subscribe(dt=>{
      this.showmsg=true;
      setTimeout(() =>this.showmsg=false, 2000);
    })
    this.openform=false;
    this.formData.reset();
    this.getBooks()
  }
  //Get Books
  getBooks(){
    this._servdata.getDbvalues("./file3ref/getbooks").subscribe(dt=>{
      this.booksdata=dt
    })
  }
  //To append dynamic css width to poopup
  @HostListener('window:resize', ['$event'])
  appendCss(event){
    this._CsstylesserviceService.appendCssclass("datatable","formdiv",'','')
    this.getLastbookId();
    this.openform =!this.openform
  }
  onFormSubmit(){
//console.log(this.formData.value)
  }
//generate Book Id
getLastbookId(){
  this._servdata.getDbvalues("./file3ref/getlastbookid").subscribe(dt=>{
    let val= dt
    this.lastbookid1=val[0].max
    })
    return parseInt(this.lastbookid1)+1;
}
test(a){
console.log(a,"==========")
}
}
