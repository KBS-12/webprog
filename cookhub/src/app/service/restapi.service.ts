import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RestapiService {

  url='http://localhost:3000/recipe';
  constructor(private http: HttpClient) { }

  getAllRecipes() {
    return this.http.get(this.url)
  }

  addRecipeData(data:any) {
    console.log(data);
    return this.http.post(this.url,data);
  }
}
