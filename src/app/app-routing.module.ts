import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import {RouterModule, Routes}  from "@angular/router"
import {HttpModule} from "@angular/http";
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudenttaskComponent } from './studenttask/studenttask.component';
import { StudentperformanceComponent } from './studentperformance/studentperformance.component';
import { StudentregComponent } from './studentreg/studentreg.component';
import { StudentAttandanceComponent } from './student-attandance/student-attandance.component';
import { StudentMaterialComponent } from './student-material/student-material.component';
import { ReusableHtmlComponent } from './reusable-html/reusable-html.component';
import { CreatebookComponent } from './library/createbook/createbook.component';
import { TakebookComponent } from './library/takebook/takebook.component';
import { MasterdataComponent } from './masterdata/masterdata.component';
const obj:Routes=[{path:" ",component:LoginComponent},
{path:"menu",component:MenuComponent,
children: [
  {path:"stdreg",component:StudentregComponent},
  {path:"stdattd",component:StudentAttandanceComponent},
  {path:"stdmaterial",component:StudentMaterialComponent},
{path:"faculty",component:FacultyComponent},
{path:"stdtask",component:StudenttaskComponent},
{path:"reusablecomp",component:ReusableHtmlComponent},
{path:"student2",component:StudentComponent},
{path:"stdper",component:StudentperformanceComponent},
{path:"createbook",component:CreatebookComponent},
{path:"takebook",component:TakebookComponent},
{path:"lookups",component:MasterdataComponent}]
}]
@NgModule({
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(obj)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
