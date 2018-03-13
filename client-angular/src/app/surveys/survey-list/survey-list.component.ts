import { Component, OnInit, OnDestroy } from '@angular/core';
import { SurveyService } from './../../services/survey.service';
import { Survey } from './../../models/survey';
import { CookieService } from 'ngx-cookie';


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit, OnDestroy {

  surveys: Survey[] = [];
  filter: String;
  userId;

  constructor(
    private surveyService: SurveyService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    // this.surveyService.surveyObserver.subscribe(
    //   surveys => this.surveys = surveys,
    //   error => console.log('error in list component')
    // );
    // this.surveyService.getSurveys();
    this.surveyService.getSurveys().subscribe(
      surveys => this.surveys = surveys,
      error => console.log('error retrieving surveys', error)
    );
    this.userId = this.cookieService.get('userID');
  }

  ngOnDestroy() {
  }

  onDelete(id) {
    // this.surveyService.deleteSurvey(id);
    this.surveyService.deleteSurvey(id).subscribe(
      deletedSurvey => {
        console.log('deleted survey');
        this.surveys = this.surveys.filter(survey => survey._id !== id);
      },
      error => {
        console.log('error deleting');
      }
    );
  }


}



// onDelete(id: number): void {
//   this.bookService.removeBook(id).subscribe(removedBook => {
//     this.books = this.books.filter(book => book._id !== id);
//   } ,
//     error => {
//       this.errorMessage = error.json();

//       setTimeout(() => {
//         this.errorMessage = null;
//       }, 3000);
//     });
// }
