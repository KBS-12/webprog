import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
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
    title: new FormControl(''),  
    difficulty: new FormControl(''),
    cookingtime: new FormControl(''),
    cost: new FormControl(''),
    ingredientsquantity: new FormControl(''),
    preparation: new FormControl(''),
    image: new FormControl('')

  });

  addRecipe() {
    this.recipe.addRecipeData(this.recipeform.value).subscribe((result) =>{
      console.log(result);
      this.recipeform.reset(); 
    });

  }

  previewImage(event: any) {
    const imagePreview = document.getElementById('imagePreview') as HTMLImageElement;
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          imagePreview.src = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }
}

