import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatMealsService {

  constructor(private httpClient:HttpClient) { }
  getMeals(category: string):Observable<any>{
    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  }
  
}
