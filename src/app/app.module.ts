import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
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
import { AppRoutingModule } from './app-routing.module';
import { ServedataService } from './servedata.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReusableHtmlComponent } from './reusable-html/reusable-html.component';
import { CreatebookComponent } from './library/createbook/createbook.component';
import { MasterdataComponent } from './masterdata/masterdata.component';
import { CustdirectiveDirective } from './custdirective.directive';
import { CsstylesserviceService } from './csstylesservice.service';
import { TakebookComponent } from './library/takebook/takebook.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    StudentComponent,
    FacultyComponent,
    StudenttaskComponent,
    StudentperformanceComponent,
    StudentregComponent,
    StudentAttandanceComponent,
    StudentMaterialComponent,
    ReusableHtmlComponent,
    CreatebookComponent,
    MasterdataComponent,
    CustdirectiveDirective,
    TakebookComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,AppRoutingModule,ReactiveFormsModule,HttpClientModule,NgxPaginationModule
  ],
  providers: [ServedataService,CsstylesserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
