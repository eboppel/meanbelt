import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'Rxjs';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

import { Survey } from './../models/survey';

@Injectable()
export class SurveyService {
  private baseURL = '/api/survey';
  // surveyObserver = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  getSurveys() {
    return this.http.get<any>(this.baseURL);
    // return this.http.get<any>(this.baseURL).subscribe(
    //   surveys => this.surveyObserver.next(surveys),
    //   error => console.log('error', error)
    // );
  }

  getSurvey(id): Observable<any> {
    console.log('in service')
    console.log(id);
    return this.http.get(`${this.baseURL}/${id}`);
  }

  createSurvey(survey: Survey) {
    survey._user = this.cookieService.get('userID');
    return this.http.post(this.baseURL, survey);
    // return this.http.post(this.baseURL, survey).subscribe(
    //   response => this.getSurveys(),
    //   error => console.log('error')
    // );
  }

  deleteSurvey(id) {
    return this.http.delete<any>(`${this.baseURL}/${id}`);
    // return this.http.delete<any>(`${this.baseURL}/${id}`).subscribe(
    //   response => {
    //     console.log('deleted task')
    //     this.getSurveys();
    //   },
    //   error => console.log('error')
    // );
  }


  vote(id, survey) {
    console.log('voting in service');
    return this.http.post(`${this.baseURL}/${id}`, survey);
  }



}
