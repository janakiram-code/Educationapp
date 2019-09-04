import { Component, OnInit,Inject } from '@angular/core';
import {FormArray,FormBuilder,Validators,FormControl, FormGroup} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import { ServedataService } from '../../servedata.service';
@Component({
  selector: 'app-takebook',
  templateUrl: './takebook.component.html',
  styleUrls: ['./takebook.component.css']
})
export class TakebookComponent implements OnInit {
  formData:FormGroup
  constructor(private httpClient: HttpClient,private fb:FormBuilder,private _servdata:ServedataService) { }

  ngOnInit() {
    this.formData=this.fb.group({
      rollno:["",Validators.required],
      name:["",Validators.required],
      class:["",Validators.required]
    })
  }
  getbooks(){
    //console.log(this.formData.value)
  }
  changevalue(value:any){
    //this.ht.get
    return this.httpClient.get('./file1refvar/getstd/'+value+"/"+"stateval").subscribe(dt=>{
      console.log(dt) 
    })
  }
}
