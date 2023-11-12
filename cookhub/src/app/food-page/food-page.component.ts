import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestapiService } from '../service/restapi.service';
import { FoodService } from '../service/food/food.service';
import { Food } from '../models/Food';
import { NewRecipePageComponent } from '../new-recipe-page/new-recipe-page.component';
import { Optional } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  params!: ''; 
  constructor(private activatedRoute:ActivatedRoute, private foodService: FoodService, private router: Router, private recipe: RestapiService, @Optional() private newrecipe: NewRecipePageComponent, private toastr: ToastrService) { 
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.food = foodService.getFoodById(params.id);
      this.params = params.id;
    })

  }
  deleteRecipe() {
    this.recipe.deleteRecipeData(this.params)
    this.toastr.success('Rezept wurde Gelöscht!');
  }
  //TODO: UpdateRecipe (Eventuell neue NewRecipeSeite mit Get ausgefüllten Inputfeldern)
  updateRecipe(){
    this.recipe.updateRecipeData(this.newrecipe.updateRecipe(),this.params)
  }

  ngOnInit(): void {
  }


}
