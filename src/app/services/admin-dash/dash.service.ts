import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCount } from 'src/app/models/AdminCount';
import { ApiService } from '../global/api.service';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private http: HttpClient,
   private apiService: ApiService  ) {}

  apiUrlG = this.apiService.getApiUrl();
  private apiUrl = this.apiUrlG+'/api/dash/admin-count/';

  getAdminCount(): Observable<AdminCount> {
    return this.http.get<AdminCount>(this.apiUrl);
  }
}
