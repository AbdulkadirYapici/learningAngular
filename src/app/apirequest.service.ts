import {Injectable, Inject} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import {map} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Region} from './Classes/Region';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApirequestService {
  accessToken = 'Bearer YjQ5OTkwZjg3MThlYjEzNTg1YzYzZjg1MTFmN2JlNWE2NDk5NTU0NWU5ODJjYjI5YmMxOGM0MTY4YmQyNjM5OA';
  api = 'https://kadir6490.pre-ideasoft.com/api/brands/';
  postApi = 'https://kadir6490.pre-ideasoft.com/api/brands';
  postData = {
    "name": "Idea Api qqq",
    "slug": "idea-qqq",
    "sortOrder": 999,
    "status": 1,
    "distributorCode": "string (qqq)",
    "distributor": "Super Deneme",
    "imageFile": "qq.jpg",
    "showcaseContent": "Üst qq metni.",
    "displayShowcaseContent": 1,
    "metaKeywords": "kırmızı, kalem, Deneme",
    "metaDescription": "Kaliteli kırtasiye ürünleri.",
    "pageTitle": "Kırmızı Deneme"
  };
  putData = {
    "id" : "14",
    "name": "Idea Kalem DDDDDDD",
    "slug": "idea-apii",
    "sortOrder": 999,
    "status": 1,
    "distributorCode": "string (apii)",
    "distributor": "Super Deneme",
    "imageFile": "Deneme.jpg",
    "showcaseContent": "Üst Deneme metni.",
    "displayShowcaseContent": 1,
    "metaKeywords": "kırmızı, kalem, Deneme",
    "metaDescription": "Kaliteli kırtasiye ürünleri.",
    "pageTitle": "Kırmızı Deneme"
  };
  constructor(private httpClient: HttpClient) {

  }
  sendDelete(id) {
    const headers = new HttpHeaders({
      'Authorization': this.accessToken,
    });
    return this.httpClient.delete(this.api+id, {
      headers: headers
    }).toPromise().then( data => {console.log("Returned From DELETE METHOD : " + JSON.stringify(data)); });
  }


  sendPost(postData) {

    const headers = new HttpHeaders({
      'Authorization': this.accessToken,
    });
    return this.httpClient.post(this.postApi, postData, {
      headers: headers
    }).pipe(
      catchError(this.handleError)
    );
  }

  sendPut(putData, elementId) {

    const headers = new HttpHeaders({
      'Authorization': this.accessToken,
    });
    return this.httpClient.put(this.api+elementId, putData, {
      headers: headers
    }).pipe(
      catchError(this.handleError)
    );

  }


  sendGet(): Observable<any> {
    //const params = new  HttpParams().set('_page', "1").set('_limit', "1");

    const headers = new HttpHeaders({
      'Authorization': this.accessToken,
    });
    return this.httpClient.get(this.api,{
      headers: headers
    });

  }

  sendSingleItemGet(itemId): Observable<any> {
    //const params = new  HttpParams().set('_page', "1").set('_limit', "1");

    const headers = new HttpHeaders({
      'Authorization': this.accessToken,
    });
    return this.httpClient.get(this.api+ itemId,{
      headers: headers
    });

  }


  handleError(error: HttpErrorResponse){
    alert("Bad Request, Değerleri doğru ve eksiksiz giriniz.")
    return throwError(error);
  }


}
