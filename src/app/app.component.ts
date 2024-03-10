import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//ingredient form imports
import {Ingredient} from "./core/models/ingredient";
import {IngredientFilterComponent} from "./features/ingredient/component/ingredient-filter/ingredient-filter.component";
import {IngredientFormComponent} from "./features/ingredient/component/ingredient-form/ingredient-form.component";
import {IngredientListComponent} from "./features/ingredient/component/ingredient-list/ingredient-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IngredientListComponent, IngredientFormComponent, IngredientFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TastyTrove';
}
