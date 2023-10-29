import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../service/restapi.service';

@Component({
  selector: 'app-new-recipe-datatable',
  templateUrl: './new-recipe-datatable.component.html',
  styleUrls: ['./new-recipe-datatable.component.css']
})
export class NewRecipeDatatableComponent implements OnInit {

  constructor(private service: RestapiService) { }

  ngOnInit(): void {
      this.GetAllRecipes();
  }

  displayedColumns: string[] = ['level', 'cookingtime', 'cost','ingredientsquantity','preparation'];
  dataSource = ELEMENT_DATA;

  recipedata: any;

  GetAllRecipes() {
    this.service.GetAllRecipes().subscribe(response => {
      this.recipedata = response;
      console.log(this.recipedata);
    })
  }

}

export interface PeriodicElement {
  level: String;
  cookingtime: number;
  cost: number;
  ingredientsquantity: String;
  preparation: String,
}

const ELEMENT_DATA: PeriodicElement[] = [
  { level: 'easy', cookingtime: 5 , cost: 7, ingredientsquantity: 'Blablaba', preparation: 'balnslaj'}
];
