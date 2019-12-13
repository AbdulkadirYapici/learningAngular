import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  h1Style: boolean  = false;
  text= "app"
  users: Object
  /*records= [
    {
      name: "kadir",
      online: true
    }, {
      name: "murat",
      online: false
    },
    {name: "batu",
    online: false
  }, {
    name: "qwe",
    online: true
  }, {
    name: "asd",
    online: true
  }, {
    name: "zxc",
    online: true
  }, {
    name: "iso",
    online: true
  }
  ]
  */
  records= {};
  httpData={};
  constructor(private data: DataService, private recordService : RecordsService) {
    
  }

  ngOnInit() {
    this.data.getUsers().subscribe( data => {
        this.users= data
        console.log(this.users)
    })
    this.records= this.recordService.getData();
    /*this.recordService.getHttpData().subscribe(data => {
      console.log("The data: " , data);
    });
*/
  }

  firstClick(){
    this.data.firstClick();
    this.h1Style= true;
  }
  myGeeks() {
    console.log("Geek called")

}
 updateValue(e) {
   this.text = e.target.value;
  console.log(e.target.value);

}

}
