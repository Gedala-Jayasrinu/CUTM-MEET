import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService  {
  constructor(private   http: HttpClient) {}

  createMeeting(title: string, password: string): Observable<any> {
    const data = {
      title: title,
      password: password
    };

    return this.http.post('http://localhost:8080/create-meeting', data);
  }
}