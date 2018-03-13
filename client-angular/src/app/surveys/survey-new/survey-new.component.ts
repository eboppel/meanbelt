import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from './../../services/survey.service';
import { Survey } from './../../models/survey';


@Component({
  selector: 'app-survey-new',
  templateUrl: './survey-new.component.html',
  styleUrls: ['./survey-new.component.css']
})
export class SurveyNewComponent implements OnInit, OnDestroy {

  survey: Survey = new Survey();

  constructor(
    private router: Router,
    private surveyService: SurveyService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onSubmit(formData) {
    // this.surveyService.createSurvey(this.survey);
    // this.router.navigateByUrl('/dashboard');
    this.surveyService.createSurvey(this.survey).subscribe(
      survey => this.router.navigateByUrl('/dashboard'),
      error => {console.log('error creating survey', error); });
  }

}
