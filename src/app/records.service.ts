import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 
  "Access-Control-Allow-Origin" : "*" 
  })}; 
@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  
  constructor(private http: HttpClient) { 

  }
  getData (){
    return [
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
  }

  getHttpData(){
    return this.http.get('http://www.google.com', httpOptions )
  }

}
