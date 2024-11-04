
import { Component} from '@angular/core';
import { JoinMeetingService } from '../join-meeting.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-join-meeting',
  templateUrl: './join-meeting.component.html',
  styleUrl: './join-meeting.component.css'
})
export class JoinMeetingComponent {
title: string = '';
password: string = '';
link: string = '';
message: string = '';
errorMessage: string = '';

constructor(private joinMeetingService: JoinMeetingService) {}

joinByTitleAndPassword() {
  this.joinMeetingService.joinByTitleAndPassword(this.title, this.password).subscribe({
    next: (response) => {
      this.message = response.message; // Successful response message
      this.errorMessage = ''; // Clear any previous error messages
    },
    error: (error) => {
      this.errorMessage = error.error; // Show the error message from the backend
      this.message = ''; // Clear any previous success messages
    }
  });
}

joinByLink() {
  this.joinMeetingService.joinByLink(this.link).subscribe({
    next: (response) => {
      this.message = response.message; // Successful response message
      this.errorMessage = ''; // Clear any previous error messages
    },
    error: (error) => {
      this.errorMessage = error.error; // Show the error message from the backend
      this.message = ''; // Clear any previous success messages
    }
  });
}
}