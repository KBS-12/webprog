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
        cookTime: '30',
        price: 6,
        imageUrl: '/assets/images/food/Pizza-Salami-2-2.jpg',
        tags: ['unter10Euro', 'RezeptDesTages' , 'All'],
      },
      {
        id: 2,
        name: 'Wiener Schnitzel',
        price: 10,
        cookTime: '30',
        imageUrl: '/assets/images/food/original-wiener-schnitzel-4198-2.jpg',
        tags: ['All'],
      },
      {
        id: 3,
        name: 'Lachsfilet Teriyaki',
        price: 10,
        cookTime: '15',
        imageUrl: '/assets/images/food/lachs.jpg',
        tags: ['FürDenSchnellenHunger' , 'All'],
      },
      {
        id: 4,
        name: 'Ofenkartoffeln',
        price: 5,
        cookTime: '25',
        imageUrl: '/assets/images/food/Ofenkartoffeln-mit-Quark-ohne-Alufolie-1.jpg',
        tags: ['unter10Euro', 'All'],
      },
      {
        id: 5,
        name: 'Chicken Ramen',
        price: 8,
        cookTime: '15',
        imageUrl: '/assets/images/food/10-minute-japanese-chicken-ramen-170412-2-2.jpg',
        tags: ['unter10Euro', 'All' , 'FürDenSchnellenHunger'],
      },
      {
        id: 6,
        name: 'Veganes Sandwich',
        price: 5,
        cookTime: '10',
        imageUrl: '/assets/images/food/Sandwich-Adobe-Stock-125436420..jpg',
        tags: ['unter10Euro', 'All' , 'FürDenSchnellenHunger'],
      },
      {
        id: 7,
        name: 'Poke Bowl',
        price: 9,
        cookTime: '15',
        imageUrl: '/assets/images/food/poke-bowl-jpg - 66109-.jpg',
        tags: ['unter10Euro', 'All' , 'FürDenSchnellenHunger'],
      },
      {
        id: 8,
        name: 'Pasta Napoli',
        price: 3,
        cookTime: '10',
        imageUrl: '/assets/images/food/spaghetti-napoli-pasta-al-pomodoro-3-2.jpg',
        tags: ['unter10Euro', 'All' , 'FürDenSchnellenHunger'],
      },
    ];
  }
}