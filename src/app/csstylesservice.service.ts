import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CsstylesserviceService {

  constructor(private http:HttpClient) { }
  appendCssclass(divid1,divid2,val1?,val2?){
    var innerWidth = window.innerWidth;
    let divwidth=document.getElementById(divid1).offsetWidth;
    var sidediv=document.getElementById(divid2);
    sidediv.style.width=(innerWidth/2)-50+"px";
    sidediv.style.marginLeft=divwidth+25+"px";
    sidediv.style.marginTop=-375+"px";
    document.getElementById(divid1).style.width=(innerWidth/2)+50+"px !important"
  }
  messageInfo(){
    // return `<div class="alert alert-success">
    //       <strong>Success!</strong> data Inserted....
    //         </div>`
    return true;
  }
}
