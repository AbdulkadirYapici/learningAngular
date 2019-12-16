import { Injectable, Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {HttpParams} from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ObjectUnsubscribedError, Observable} from 'rxjs';
import { ApirequestService } from '../apirequest.service';
import { Region } from '../Classes/Region';
import { MyErrorHandlerService } from '../my-error-handler.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-apigrid',
  templateUrl: './apigrid.component.html',
  styleUrls: ['./apigrid.component.scss']
})

export class ApigridComponent implements OnInit {
  subscribedParam = "initial value";
  editId;
  myVar= true;
  run = false;
  ///api = 'https://abdulkadiryapici.myideasoft.com/api/regions';
  postData;
  putData;
  regions: unknown;
  singleItem= [];
  constructor(private apiService: ApirequestService, private httpClient: HttpClient, private router: Router,private readonly route: ActivatedRoute) {

    //this.apiService.sendDelete();
    //this.apiService.sendPut();
    /*this.route.params.subscribe( params => this.editId= params.id);
    console.log("id: " + this.editId);

    if(this.editId != null) {
      this.apiService.sendSingleItemGet(this.editId)
        .subscribe(
          data => {
            this.singleItem = data;
            //Marmara-> console.log("data is : " + data[0].name);
            console.log("region data is : " +  JSON.stringify(this.singleItem));
          }
        );
    }
    else{
    }*/

  }


  ngOnInit() {


    if(this.run == false){
      setTimeout(() => {

        this.apiService.sendGet()
          .subscribe(
            data => {
              this.regions = data;
              //Marmara-> console.log("data is : " + data[0].name);
              //console.log("region data is : " +  this.regions);
            }
          );
        this.run= true;

      }, 500)
/*
      setTimeout(() => {

        this.apiService.sendSingleItemGet(1)
          .subscribe(
            data => {
              this.singleItem = data;
              //Marmara-> console.log("data is : " + data[0].name);
              console.log("region data is : " +  JSON.stringify(this.singleItem));

            }
          );
        this.run= true;

      }, 500)*/
    }

  }

  onClickPostSubmit(formData) {
    if(formData.status == true){
      formData.status =1 ;
    }else{
      formData.status =0;
    }


    if(formData.displayShowcaseContent == true){
      formData.displayShowcaseContent =1 ;
    }else{
      formData.displayShowcaseContent =0;
    }

    this.postData = {
      "name": formData.name,
      "slug": formData.slug,
      "sortOrder": formData.sortOrder,
      "status": formData.status,
      "distributorCode": formData.distributorCode,
      "distributor": formData.distributor,
      "imageFile": formData.imageFile + ".jpg",
      "showcaseContent": formData.showcaseContent,
      "displayShowcaseContent": formData.displayShowcaseContent,
      "metaKeywords": formData.metaKeywords,
      "metaDescription": formData.metaDescription,
      "pageTitle": formData.pageTitle
    };
    console.log(JSON.stringify(this.postData));

    this.apiService.sendPost(this.postData).toPromise().then( data => {console.log("Returned From POST METHOD : " + JSON.stringify(data)); window.location.href = '/test';});


  }

  onClickPutSubmit(formData, elementId) {
    if(formData.status == true){
      formData.status =1 ;
    }else{
      formData.status =0;
    }

    if(formData.displayShowcaseContent == true){
      formData.displayShowcaseContent =1 ;
    }else{
      formData.displayShowcaseContent =0;
    }

    this.putData = {
      "name": formData.name,
      "slug": formData.slug,
      "sortOrder": formData.sortOrder,
      "status": formData.status,
      "distributorCode":  formData.distributorCode,
      "distributor": formData.distributor,
      "imageFile": formData.imageFile + ".jpg",
      "showcaseContent": formData.showcaseContent,
      "displayShowcaseContent": formData.displayShowcaseContent,
      "metaKeywords": formData.metaKeywords,
      "metaDescription": formData.metaDescription,
      "pageTitle": formData.pageTitle
    };
    console.log(JSON.stringify(this.putData));

    this.apiService.sendPut(this.putData, elementId).toPromise().then( data => {console.log("Returned From POST METHOD : " + JSON.stringify(data)); window.location.href = '/test';});

  }

    deleteItem(elementId){
    if (confirm("Are you sure you want to delete this item? ")) {
      this.apiService.sendDelete(elementId);
      window.location.href = '/test'
    } else {
    }
  }

  editItem(elementId){
    //this.router.navigate(['test', elementId]);
    window.location.href = '/form/'+ elementId;
  }

}
