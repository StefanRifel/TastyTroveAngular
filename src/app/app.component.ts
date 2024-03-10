import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//ingredient form imports
import {IngredientFilterComponent} from "./features/ingredient/component/ingredient-filter/ingredient-filter.component";
import {IngredientFormItemComponent} from "./features/ingredient/component/ingredient-form/ingredient-form-item.component";
import {IngredientListComponent} from "./features/ingredient/component/ingredient-list/ingredient-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IngredientListComponent, IngredientFormItemComponent, IngredientFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TastyTrove';

}
