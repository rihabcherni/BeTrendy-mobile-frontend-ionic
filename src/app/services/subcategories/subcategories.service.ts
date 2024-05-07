import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from 'src/app/models/Category';
import { ApiService } from '../global/api.service';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {

  constructor(private http: HttpClient,
    private apiService: ApiService  ) {}

   apiUrlG = this.apiService.getApiUrl();
   private apiUrl = this.apiUrlG+'/api/products/categories/';

  getSubcategories(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}${categoryId}`).pipe(
      catchError(error => {
        console.error('Error fetching subcategories:', error);
        throw error;
      })
    );
  }
}
