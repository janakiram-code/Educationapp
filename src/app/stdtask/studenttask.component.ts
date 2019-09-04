import { Component, OnInit,Inject } from '@angular/core';
import {FormGroup,FormArray,FormBuilder,Validators} from '@angular/forms';
import { ServedataService } from '../servedata.service';
import {Http} from "@angular/http";
@Component({
  selector: 'app-studenttask',
  templateUrl: './studenttask.component.html',
  styleUrls: ['./studenttask.component.css']
})
export class StudenttaskComponent implements OnInit {
  formData : FormGroup;a;

  constructor(@Inject(Http) public ht,private _servData:ServedataService,private fb:FormBuilder) {
    this.formData=this.fb.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      address:this.fb.array([this.getAddress()])
    })
    // this.formData.get('firstName').valueChanges.subscribe(val=>{
    //   console.log(val)
    // })
   }
   logkeyvaluepairs(group:FormGroup):void{
     Object.keys(group.controls).forEach((val:string)=>{
      const fields=group.get(val)
      if(fields instanceof FormGroup){
        this.logkeyvaluepairs(fields)
      }else{
        console.log('key ' + val+ ' fields ' + fields.value)
        if(val=='address'){
          for(let i=0;i<fields.value.length;i++){
            console.log(fields.value[i])
          }
        }
       //fields.disable()
      }
     })
   }
   onloadData():void{
    this.logkeyvaluepairs(this.formData);
   }
  fields;
  comboval;
  ngOnInit() {
    /*this.dynamicForm=new FormGroup({
      caption:new FormControl(),
      pgid:new FormControl(),
      slno:new FormControl(),
      fieldname:new FormControl(),
      type:new FormControl()
    });*/
  }
  /*onSubmit():void{
    this.test()
    //this.savefields();
  }*/
  getAddress(){
    return this.fb.group({
      city:["",Validators.required],
      state:["",Validators.required],
      country:["",Validators.required]
    })
  }
  get addressListArray(){
    return <FormArray>this.formData.get("address")
  }
  Addaddress(){
    this.addressListArray.push(this.getAddress());
  }
  RemoveAdd(index){
    this.addressListArray.removeAt(index)
  }
  saveformData(ob){
    var ob=this.formData.value;
    console.log(ob)
  }
  savefields(){
    //var ob=this.dynamicForm.value;
    //console.log(ob.caption)
    //var ob={caption:ob.caption,slno:ob.slno,fieldname:ob.fieldname,type:ob.type}
    //var ob={caption:'ob.caption',slno:'ob.slno',fieldname:'ob.fieldname',type:'ob.type'}
      //stdfaname:this.stdfaname,stdaddr:this.stdaddr,stdpwd:this.stdpwd}
     // console.log(ob);
    //this._servData.savefields1().subscribe(dt=>{
      ///alert(dt);
      //window.location.reload();
  //}
  //console.log(ob);
  /*this.ht.post("./file1refvar/savefields",ob).subscribe(dt=>{
    alert(dt._body)
  })*/
}     
  getFields(){
    alert('fffffffffffff')
    /*this.ht.get("./file1refvar/getfields").subscribe(dt=>{
      this.fields=(dt._body);  
      this.fields=JSON.parse(this.fields);
       let i=0; 
      for(let entry of this.fields) {
        if(entry.type=='Combo' && entry.txt1!=undefined){
          this.fields[i].txt1 = entry.txt1.split(',');
        } 
        var cap=this.fields[0].fieldname;
        this.dynamicForm=new FormGroup({
          
          //[this.fields[0].fieldname]:new FormControl(),
          [this.fields[1].fieldname]:new FormControl(),
          [this.fields[2].fieldname] :new FormControl(), 
          [this.fields[3].fieldname]:new FormControl(),
          [this.fields[4].fieldname] :new FormControl(),
          [this.fields[5].fieldname] :new FormControl(),
        }); 
        this.a=true;
        i++;
      }
    })*/
  }
}
