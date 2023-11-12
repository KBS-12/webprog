import { Injectable } from '@angular/core';
import { Food } from '../../models/Food';
import { Tag } from '../../models/Tag';
import  recipe  from '../../../../db.json';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  getTagByName(name: string): Tag{
    return this.getAllTags().find(tag => tag.name = name)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 20 },
      { name: 'unter10Euro', count: 7 },
      { name: 'FürDenSchnellenHunger', count: 5 },
      { name: 'RezeptDesTages', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }
  
  getAll(): Food[] {
    const recipeArray: Food[] = recipe.recipe;
    return recipeArray;
 }
}