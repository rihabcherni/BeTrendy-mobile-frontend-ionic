import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SellerDashCount } from 'src/app/models/SellerDashCount';
import { ApiService } from '../global/api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboradSellerService {

  constructor(private http: HttpClient,
    private apiService: ApiService  ) {}

   apiUrlG = this.apiService.getApiUrl();
   private apiUrl = this.apiUrlG+'/api/dash/seller-count/';

  getAdminCount(): Observable<SellerDashCount> {
    return this.http.get<SellerDashCount>(this.apiUrl);
  }
}
