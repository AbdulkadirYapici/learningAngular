import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  private price= 50 ; 
  USD= true; 


  constructor() { }
  
  ngOnInit() {
  }
  get amount() {
    return this.USD? this.price : this.price*65
  }
  get format(){
    return this.USD ? 'USD' : "INR"; 
  }  

  toggleItem(){
    this.USD = !this.USD; 
  }

}
