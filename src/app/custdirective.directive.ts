import { Directive,ElementRef ,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appCustdirective]'
})
export class CustdirectiveDirective {
  @Input() hoverColor:string
  constructor(private el:ElementRef) {
    //el.nativeElement.style.backgroundColor="yellow"
   }
   @HostListener('mouseenter')onmouseenter(){
     this.hilitecolor(this.hoverColor)
   }
   @HostListener('mouseleave')onmouseleave(){
     this.hilitecolor("white")
   }
   hilitecolor(colors){
     this.el.nativeElement.style.backgroundColor=colors
   }
}
