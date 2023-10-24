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
      { name: 'All', count: 6 },
      { name: 'unter10Euro', count: 4 },
      { name: 'FürDenSchnellenHunger', count: 2 },
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
  getAllF(): Food[] {
    return [
      {
        
        id: 1,
        name: 'Leberkäse',
        price: 5,
        ingredientsquantity: '',
        difficulty:'',
        cookingtime: 20,
        imageUrl: '/assets/images/food/Leberkäse.jpg',
        tags: ['unter10Euro', 'Lunch'],   },
      {
        id: 2,
        name: 'Leberkäse',
        price: 5,
        ingredientsquantity: '',
        difficulty:'',
        cookingtime: 20,
        imageUrl: '/assets/images/food/Leberkäse.jpg',
        tags: ['unter10Euro', 'Lunch'],
      },
      
    ];
  }
}