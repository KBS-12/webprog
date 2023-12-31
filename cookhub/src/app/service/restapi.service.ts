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
  deleteRecipeData(params:any){
  return this.http.delete(this.url+'/'+params).subscribe(data => {
    console.log(data);
  })}
  updateRecipeData(data:any,params:any){
    return this.http.put(this.url+'/'+params,data).subscribe(data => {
      console.log(data);
    });
  }


}
