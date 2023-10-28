import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

  GetAllRecipes(){
    return this.http.get("http://localhost:3000/recipe");
  }

  private apiUrl = 'http://localhost:3000/recipe'; 

  addRecipe(recipeData: any): Observable<any> {
    return this.http.post(this.apiUrl, recipeData);
  }

}
