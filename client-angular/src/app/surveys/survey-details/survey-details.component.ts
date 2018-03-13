import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from './../../services/survey.service';

import { Survey } from './../../models/survey';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {
  survey: Survey;

  constructor(
    private route: ActivatedRoute,
    private surveyService: SurveyService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.surveyService.getSurvey(params.get('survey_id')).subscribe(
        survey => this.survey = survey[0]
      );
    });
  }

  vote(id, vote) {

    if(vote == 'vote_1') {
      this.survey.vote_1 ++;
    } else if (vote == 'vote_2') {
      this.survey.vote_2 ++;
    } else if (vote == 'vote_3') {
      this.survey.vote_3 ++;
    } else if (vote == 'vote_4') {
      this.survey.vote_4 ++;
    }

    this.surveyService.vote(id, this.survey).subscribe(survey => console.log('voted'));
  }

}
