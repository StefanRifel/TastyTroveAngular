import {Component} from '@angular/core';

import {Ingredient} from "../../../../core/models/ingredient";

import {IngredientFilterComponent} from "../ingredient-filter/ingredient-filter.component";
import {IngredientListComponent} from "../ingredient-list/ingredient-list.component";

@Component({
    selector: 'app-ingredient-form-item',
    standalone: true,
    imports: [
        IngredientFilterComponent,
        IngredientListComponent
    ],
    templateUrl: './ingredient-form-item.component.html',
    styleUrl: './ingredient-form-item.component.css'
})
export class IngredientFormItemComponent {
    ingredientList: Ingredient[] = [];

    addIngredientToList(ingredient: Ingredient) {
        this.ingredientList.push(ingredient);
    }
}
