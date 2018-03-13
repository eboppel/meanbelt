import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { SurveyListComponent } from './surveys/survey-list/survey-list.component';
import { SurveyNewComponent } from './surveys/survey-new/survey-new.component';
import { SurveyDetailsComponent } from './surveys/survey-details/survey-details.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'dashboard', component: SurveyListComponent },
  { path: 'create', component: SurveyNewComponent },
  { path: 'survey/:survey_id', component: SurveyDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
