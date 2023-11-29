import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import "@fontsource/abril-fatface";
import "@fontsource/roboto";

@Component({
  selector: 'app-heading',
  standalone: false,
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent implements OnInit {
name:string="Rakshan Thapar"  
title:string="Full Stack Developer."
i:number=0;
speed:number=50;
typedName:string="";
typedTitle:string="";
ngOnInit(){
   this.typeWriter();
}
 typeWriter() {
    if (this.i < this.name.length) {
      this.typedName +=this.name.charAt(this.i);
      this.i++;

      setTimeout(()=>{
        this.typeWriter();
      }, this.speed);

     }else{
      this.i=0;
      this.typeWriter1();
     }
  
    
  }
  typeWriter1() {
    if (this.i < this.title.length) {
      this.typedTitle +=this.title.charAt(this.i);
      this.i++;

      setTimeout(()=>{
        this.typeWriter1();
    }, this.speed);
    }
    
  }
}
