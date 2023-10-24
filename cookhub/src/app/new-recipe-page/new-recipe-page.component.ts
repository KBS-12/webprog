import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { RestapiService } from '../service/restapi.service';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-new-recipe-page',
  templateUrl: './new-recipe-page.component.html',
  styleUrls: ['./new-recipe-page.component.css']
})

export class NewRecipePageComponent {

  constructor(private recipe: RestapiService) {
  }

    recipeform = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    cookingtime: new FormControl(''),
    ingredientsquantity: new FormControl(''),
    imageUrl: new FormControl(''),
    preparation: new FormControl(''),
    difficulty: new FormControl(''),

  });

  addRecipe() {
    this.recipe.addRecipeData(this.recipeform.value).subscribe((result) =>{
      console.log(result);
    });

  }
}
