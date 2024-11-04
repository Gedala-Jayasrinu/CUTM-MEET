import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingOptionsComponent } from './meeting-options/meeting-options.component';
import { AdminComponent } from './admin/admin.component';
import { JoinMeetingComponent } from './join-meeting/join-meeting.component';
const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } ,
    {
      path: 'register', component: RegisterComponent
    },
   
    {
      path: 'login', component: LoginComponent
      },
      {
        path: 'meetingOptions',component: MeetingOptionsComponent
      },
      {
       path: 'create-meeting', component: MeetingComponent ,
    },
    {
      path:'admin',component: AdminComponent
    },
    {
      path:'join-meeting',component: JoinMeetingComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
