import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Seller } from 'src/app/models/Seller';
import { ApiService } from '../global/api.service';

@Injectable({
  providedIn: 'root'
})
export class SellerListService {

  constructor(private http: HttpClient,
    private apiService: ApiService  ) {}

   apiUrlG = this.apiService.getApiUrl();
   private apiUrl = this.apiUrlG+'/api/auth/sellers/';
   private apiUrl2 = this.apiUrlG+'/api/auth/user/';
   private apiUrl3 = this.apiUrlG+'/api/auth/create-seller/';


  getSellers(): Observable<Seller[]> {
    return this.http.get<Seller[]>(this.apiUrl);
  }
  getUserById(id: number): Observable<Seller> {
    return this.http.get<Seller>(`${this.apiUrl2}${id}/`);
  }

  updateSeller(sellerId: number, updatedSellerData: Partial<Seller>): Observable<Seller> {
    const url = `${this.apiUrl2}${sellerId}/`;
    return this.http.put<Seller>(url, updatedSellerData);
  }

  createUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl3, userData);
  }
  removeSeller(sellerId: number): Observable<any> {
    const url = `${this.apiUrl2}${sellerId}/`;
    return this.http.delete(url);
  }
}
