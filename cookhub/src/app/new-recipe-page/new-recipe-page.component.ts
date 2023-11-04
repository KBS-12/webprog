import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { RestapiService } from '../service/restapi.service';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-recipe-page',
  templateUrl: './new-recipe-page.component.html',
  styleUrls: ['./new-recipe-page.component.css']
})

export class NewRecipePageComponent {

  constructor(private recipe: RestapiService, private router: Router, private toastr: ToastrService) {
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

  updateRecipe(){

    return this.recipeform.value;
    }
  addRecipe() {
    if(this.recipeform.value.price == ""){
      this.toastr.error('Bitte Preis eingeben!');
    }else{
    this.recipe.addRecipeData(this.recipeform.value).subscribe((result) =>{
      console.log(result);
    });
    this.router.navigate(['profile-page']);
    
  }
  }
}
