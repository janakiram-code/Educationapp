import { Component, OnInit,Inject,ViewChild } from '@angular/core';
import {FormArray,FormBuilder,Validators,FormControl, FormGroup} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import { ServedataService } from '../../servedata.service';
import { switchMap, debounceTime, tap, map } from 'rxjs/operators';
@Component({
  selector: 'app-takebook',
  templateUrl: './takebook.component.html',
  styleUrls: ['./takebook.component.css']
})
export class TakebookComponent implements OnInit {
  formData:FormGroup;
  searchdata:any;
  showdata=false;
  sendapicall=true;
  constructor(private httpClient: HttpClient,private fb:FormBuilder,private _servdata:ServedataService) { }
  // @ViewChild('createbook.component')
  // book:CreatebookComponent
  ngOnInit() {
    this.formData=this.fb.group({
      stdregno:["",Validators.required],
      stdname:["",Validators.required],
      stdclass:["",Validators.required]
    })
    this.changevalue();
  }
  selecteddata(data){
    console.log(data,"selecteddata..")
    this.formData.setValue({
      stdregno:data.stdregno,
      stdname:data.stdname,
      stdclass:data.stdclass
    })
    this.showdata=false 
    this.sendapicall=false;
  }
  changevalue(){
    this.formData.get('stdregno').valueChanges.pipe(debounceTime(1000)).subscribe(data=>{
      if(data && this.sendapicall)this._servdata.getDbvalues('./file1refvar/getstd/'+data).
      subscribe(data=>{
         this.searchdata=data
         if(Object.keys(data).length>0) this.showdata=true;
         else this.showdata=false
        })
        this.sendapicall=true;
    })
  }
  getbooks(){
    
  }
}
