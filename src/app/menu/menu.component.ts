import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
menu;opener;
  constructor() {
    this.menu=true;
   }

  ngOnInit() {
  }
  openNav(a) {
    this.opener=a;
    document.getElementById("mySidenav").style.width = "250px";
}
 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
}
