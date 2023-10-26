import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdeasPageRequest } from '../_interfaces/ideas-page-request.interface';
import { IdeasPageResponse } from '../_interfaces/ideas-page-response.interface';

@Injectable({
  providedIn: 'root'
})
export class IdeasPageService {

  private baseUrl = 'http://localhost:3001/ideas';

  constructor(
    private http: HttpClient
  ) { }

  postIdea(body: IdeasPageRequest): Observable<IdeasPageRequest> {
    return this.http.post<IdeasPageRequest>(this.baseUrl, body);
  }

  getIdea(): Observable<IdeasPageResponse[]> {
    return this.http.get<IdeasPageResponse[]>(this.baseUrl);
  }
}
