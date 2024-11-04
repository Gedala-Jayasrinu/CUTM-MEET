import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinMeetingService {
  private baseUrl = 'http://localhost:8080/api/join-meeting';

  constructor(private http: HttpClient) {}

  joinByTitleAndPassword(title: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('title', title)
      .set('password', password);
    
    return this.http.post(`${this.baseUrl}/by-title`, params);
  }

  joinByLink(link: string): Observable<any> {
    const params = new HttpParams().set('link', link);
    
    return this.http.post(`${this.baseUrl}/by-link`, params);
  }
}