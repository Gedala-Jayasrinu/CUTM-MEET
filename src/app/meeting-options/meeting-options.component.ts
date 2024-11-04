import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-options',
  templateUrl: './meeting-options.component.html',
  styleUrl: './meeting-options.component.css'
})
export class MeetingOptionsComponent {
  constructor(private router: Router) {}

  // navigateToCreateMeeting() {
  //   this.router.navigate(['/create-meeting']);
  // }

  navigateToJoinMeeting() {
    this.router.navigate(['/join-meeting']);
  }
}