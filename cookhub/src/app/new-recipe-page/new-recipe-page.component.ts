import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RestapiService } from '../service/restapi.service';

@Component({
  selector: 'app-new-recipe-page',
  templateUrl: './new-recipe-page.component.html',
  styleUrls: ['./new-recipe-page.component.css']
})

export class NewRecipePageComponent {
  addRecipe: FormGroup;

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private restapiService: RestapiService
  ) {
    
    this.addRecipe = this.builder.group({
      difficulty: ['', Validators.required],
      cookingtime: ['', Validators.required],
      cost: ['', Validators.required],
      ingredientsquantity: ['', Validators.required],
      preparation: ['', Validators.required]
    });
  }

  saveData() {
    if (this.addRecipe.valid) {
      const recipeData = this.addRecipe.value;
      this.restapiService.addRecipe(recipeData).subscribe(
        (response) => {
          this.toastr.success('Rezept wurde erfolgreich gespeichert.');
          // Optional: Hier kannst du zur Erfolgsseite navigieren oder andere Aktionen durchführen.
        },
        (error) => {
          this.toastr.error('Fehler beim Speichern des Rezepts.');
        }
      );
    } else {
      this.toastr.error('Bitte füllen Sie alle erforderlichen Felder aus.');
    }
  }
}
