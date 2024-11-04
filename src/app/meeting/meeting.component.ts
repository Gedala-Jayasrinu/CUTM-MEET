import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingService } from '../meeting.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent 

  {
    title = '';
    password = '';
    uniqueLink = '';
    error = '';
  
    constructor(private http: HttpClient,) {}
  
    createLink() {
      const data = {
        title: this.title,
        password: this.password
      };
      console.log('Sending data:', JSON.stringify(data));
    
      this.http.post('http://localhost:8080/create-meeting', data, { responseType: 'text' })
        .subscribe(
          (response: string) => {
            this.uniqueLink = response;
            this.error = '';
            alert('Your unique link: ' + response);
          },
          error => {
            this.error = 'Error creating link: ' + error.error.message;
          }
        );
    }
  }