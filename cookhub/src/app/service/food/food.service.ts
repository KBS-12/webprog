import { Injectable } from '@angular/core';
import { Food } from '../../models/Food';
import { Tag } from '../../models/Tag';
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
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        imageUrl: '/assets/images/food/lachs.jpg',
        tags: ['unter10Euro', 'unter 20min', 'Gerichte unter 5 Euro'],
      },
      {
        id: 2,
        name: 'Leberkäse',
        price: 5,
        cookTime: '20-30',
        imageUrl: '/assets/images/food/Leberkäse.jpg',
        tags: ['unter10Euro', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        imageUrl: '/assets/images/food/lachs.jpg',
        tags: ['unter10Euro','Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        imageUrl: '/assets/images/food/lachs.jpg',
        tags: ['unter10Euro','FastFood','Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        imageUrl: '/assets/images/food/lachs.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        imageUrl: '/assets/images/food/lachs.jpg',
        tags: ['unter 10 Euro', 'FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }
}