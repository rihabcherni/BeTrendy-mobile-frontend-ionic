import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from 'src/app/models/Category';
import { Subcategory } from 'src/app/models/Subcategory';
import { ApiService } from '../global/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {

  constructor(private http: HttpClient,
    private apiService: ApiService  ) {}

   apiUrlG = this.apiService.getApiUrl();
   private apiUrl = this.apiUrlG+'/api/products/subcategories/';

  getSubcategories(subcategoryId: number): Observable<Subcategory> {
    return this.http.get<Subcategory>(`${this.apiUrl}${subcategoryId}`).pipe(
      catchError(error => {
        console.error('Error fetching subcategories:', error);
        throw error;
      })
    );
  }
}
