import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-material',
  templateUrl: './student-material.component.html',
  styleUrls: ['./student-material.component.css']
})
export class StudentMaterialComponent implements OnInit {
  studentForm :FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.studentForm=this.fb.group({
      stdname:[''],
      stdclass:[''],
      bookno:[''],
      bookname:[''],
      issuedate:[''],
      returndate:[''],
      totdays:['']
    })
  }
onSubmit(){
  console.log(this.studentForm.get('stdname'))
}
}
