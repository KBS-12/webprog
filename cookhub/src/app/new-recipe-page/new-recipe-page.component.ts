import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { RestapiService } from '../service/restapi.service';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';

interface RecipeResponse {
  id: number;
}

@Component({
  selector: 'app-new-recipe-page',
  templateUrl: './new-recipe-page.component.html',
  styleUrls: ['./new-recipe-page.component.css']
})

export class NewRecipePageComponent {

  constructor(private recipe: RestapiService, private router: Router, private toastr: ToastrService) {
  }

    recipeform = new FormGroup({

    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    cookingtime: new FormControl('', Validators.required),
    ingredientsquantity: new FormControl('', Validators.required),
    imageUrl: new FormControl(''),
    preparation: new FormControl('', Validators.required),
    difficulty: new FormControl('', Validators.required),

  });

  updateRecipe(){

    return this.recipeform.value;
    }

    addRecipe() {
      if (this.recipeform.invalid) {
        this.toastr.error('Bitte Pflichfelder* nicht leer lassen!');
      } else {
        this.recipe.addRecipeData(this.recipeform.value).subscribe((result: RecipeResponse) => {
          const newRecipeId = result.id;
          console.log(result);
          this.recipeform.reset();
          this.toastr.success('Das Rezept wurde Erfolgreich hinzugefügt!');
          this.router.navigate(['food-page', newRecipeId]);
        });
      }
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

