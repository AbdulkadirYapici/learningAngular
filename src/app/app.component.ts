import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  somevar= 10 ; 
  title = 'ng7';
  ngOnInit(){
    setInterval(()=> {
      this.somevar= Math.random();
    },50    )
  }

}
