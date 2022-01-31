import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calc',
  templateUrl: './simple-calc.component.html',
  styleUrls: ['./simple-calc.component.css']
})
export class SimpleCalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 output = ''

 display(val:any){
   this.output +=val
 }
 deleteOne(){
   var number:any = this.output;
   var remove:any ;
   remove = number.slice(0,-1)
   this.output = remove
 }
 clearAll(){
   this.output = ''
 }
 equal(){
   var cal1:any = this.output
   var cal2:any = eval(cal1)
   this.output = cal2
 }
}
