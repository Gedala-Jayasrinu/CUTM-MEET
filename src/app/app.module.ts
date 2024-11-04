import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { MemberComponent } from './member/member.component';
import { LandingComponent } from './landing/landing.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingOptionsComponent } from './meeting-options/meeting-options.component';
import { AdminComponent } from './admin/admin.component';
import { JoinMeetingComponent } from './join-meeting/join-meeting.component';
import { JoinMeetingService } from './join-meeting.service';

@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        MemberComponent,
        LandingComponent,
        MainpageComponent,
        LandingPageComponent,
        MeetingComponent,
        MeetingOptionsComponent,
        AdminComponent,
        JoinMeetingComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,FormsModule,
        ReactiveFormsModule], providers: [HttpClient,
        provideClientHydration(),
        provideHttpClient(withFetch()),JoinMeetingService
    ] })
export class AppModule { }
