import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable, Inject } from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {ObjectUnsubscribedError, Observable} from 'rxjs';
import { Region } from '../Classes/Region';
import { MyErrorHandlerService } from '../my-error-handler.service';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../validators/must-match';
import {ApirequestService} from '../apirequest.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  editId;

  registerForm: FormGroup;
  submitted = false;
  singleItem= [];
  putData;

  constructor(private formBuilder: FormBuilder,private apiService: ApirequestService, private httpClient: HttpClient, private router: Router,private readonly route: ActivatedRoute) {
    this.route.params.subscribe( params => this.editId= params.id);
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
    }

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      slug: ['', Validators.required],
      sortOrder: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


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
      "distributorCode": "string ("+  formData.distributorCode+ ")",
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

  goToTestPage(){
    window.location.href = '/test/';

  }

}
