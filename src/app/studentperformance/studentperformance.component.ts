import { Component, OnInit,EventEmitter,Input,Output} from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs'
import {StdMaster} from "../StdMaster"
import {Oldstudentmaster} from "../oldstudentmaster"
@Component({
  selector: 'app-studentperformance',
  templateUrl: './studentperformance.component.html',
  styleUrls: ['./studentperformance.component.css']
})
export class StudentperformanceComponent implements OnInit {
//   private data: Observable<string>;
//   private fruits: Array<string> = [];
//   private anyErrors: boolean;
//   private finished: boolean;
    formData:FormGroup;
    @Input() student:StdMaster;
    @Output() updateStudent=new EventEmitter<Oldstudentmaster>();
    oldstudentmaster=new Oldstudentmaster();
    update(){
      this.oldstudentmaster.fname=this.student.fname;
      this.oldstudentmaster.lname=this.student.lname;
      this.updateStudent.emit(this.oldstudentmaster);
      console.log(this.oldstudentmaster)
    }
  constructor(private fb:FormBuilder) {
      this.formData=this.fb.group({
         firstname:["",""],
         seondname:["",Validators.required] 
      })
   }
ngOnInit(){
}
 Start(){
//   this.data = new Observable
//   (
//     observer =>
//     {
//             setTimeout(() =>
//             {
//                 observer.next('Apple');
//             }, 1000);
           
//             setTimeout(() =>
//             {
//                 observer.next('mango');
//             }, 2000);
//             setTimeout(() =>
//             {
//                 observer.next('Orannge');
//             }, 3000);
//             setTimeout(() =>
//             {
//                 observer.error(new Error('Orannge'));
//             }, 4000);
//             setTimeout(() =>
//             {
//                 observer.complete();
//             }, 5000);
           
//    }
// ); 
// let subscription = this.data. subscribe(
// fruit => this.fruits.push(fruit),
//     error => this.anyErrors = true,
//     () => this.finished = true
// );
//  }
// Start1(){
//   for(let t=0;t<4;t++){
//     this.Start();
//   }
 }
}