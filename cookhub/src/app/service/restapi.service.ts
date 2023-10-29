import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) {

  }

  apiurl='http://localhost:3000/recipe';

  AddRecipe(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
}
