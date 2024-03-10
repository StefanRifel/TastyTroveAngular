import {Component, Input} from '@angular/core';

import {MaterialModule} from "../../../../core/module/material/material/material.module";

import {Ingredient} from "../../../../core/models/ingredient";

@Component({
    selector: 'app-ingredient-list',
    standalone: true,
    imports: [MaterialModule],
    templateUrl: './ingredient-list.component.html',
    styleUrl: './ingredient-list.component.css'
})
export class IngredientListComponent {
    @Input() ingredientList: Ingredient[] = [];
}
