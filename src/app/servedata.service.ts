import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServedataService {
private _getstudentUrl="./file1refvar/getstudent";
private _getregstudent="./file1refvar/regstd";
private _savefields="./file1refvar/savefields";
  constructor(private http:HttpClient) { }
  //To get Student Data....
  getStudent(){
    return this.http.get<any>(this._getstudentUrl)
  }  
  //TO Register Student.....
  //url:url of Node API
  //data: Data of Objects
  InsertRecord(data,url){
    return this.http.post(url,data)
  }
  //get Last reg no...
  getLastregno1(){
    return this.http.get<any>("/file1refvar/lastregno")
  }
   savefields1(ob){
    return this.http.post<any>(this._savefields,ob)
  }
  //To Fetch Database values
  getDbvalues(url){
      return this.http.get<any>(url)
  }
  

}

