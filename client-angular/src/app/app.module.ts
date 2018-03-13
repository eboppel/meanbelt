import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CookieModule } from 'ngx-cookie';


// COMPONENTS
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { SurveysComponent } from './surveys/surveys.component';
import { SurveyNewComponent } from './surveys/survey-new/survey-new.component';
import { SurveyListComponent } from './surveys/survey-list/survey-list.component';
import { SurveyDetailsComponent } from './surveys/survey-details/survey-details.component';


// SERVICES
import { AuthService } from './services/auth.service';
import { SurveyService } from './services/survey.service';

// PIPES
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent, LoginComponent, RegisterComponent,
    SurveysComponent, SurveyNewComponent, SurveyNewComponent, SurveyListComponent, SurveyDetailsComponent,
    SearchPipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, HttpModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],

  providers: [AuthService, SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
