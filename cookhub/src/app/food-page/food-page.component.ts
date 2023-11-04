import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestapiService } from '../service/restapi.service';
import { FoodService } from '../service/food/food.service';
import { Food } from '../models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  params!: ''; 
  constructor(private activatedRoute:ActivatedRoute, private foodService: FoodService, private router: Router, private recipe: RestapiService) { 
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.food = foodService.getFoodById(params.id);
      this.params = params.id;
    })

  }
  deleteRecipe() {
    debugger;
    this.recipe.deleteRecipeData(this.params)
    
  }
  
  ngOnInit(): void {
  }


}
