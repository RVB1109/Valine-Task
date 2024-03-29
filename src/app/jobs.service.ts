import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private http: HttpClient) {}
  GetJsonData(): Observable<any> {
    return this.http.get('../assets/jobs_data.json');
  }
}
