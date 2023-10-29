import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { RestapiService } from '../service/restapi.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-recipe-page',
  templateUrl: './new-recipe-page.component.html',
  styleUrls: ['./new-recipe-page.component.css']
})

export class NewRecipePageComponent {

  constructor(private builder: FormBuilder ,private service:RestapiService, private router:Router) {

  }

  recipeform=this.builder.group({

      difficulty:this.builder.control(''),
      cookingtime:this.builder.control(''),
      cost:this.builder.control(''),
      ingredientsquantity:this.builder.control(''),
      preparation:this.builder.control('')
    });

  addRecipe(){
    this.service.AddRecipe(this.recipeform.value)  }

}
