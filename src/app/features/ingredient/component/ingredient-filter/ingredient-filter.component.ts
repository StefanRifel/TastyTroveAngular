import {Component, OnInit, EventEmitter, inject, Output} from '@angular/core';

import {IngredientService} from "../../service/ingredient.service";
import {Ingredient} from "../../../../core/models/ingredient";

import {MaterialModule} from "../../../../core/module/material/material/material.module";

import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-ingredient-filter',
  standalone: true,
    imports: [
        AsyncPipe,
        MaterialModule,
        ReactiveFormsModule
    ],
  templateUrl: './ingredient-filter.component.html',
  styleUrl: './ingredient-filter.component.css'
})
export class IngredientFilterComponent implements OnInit{
    ingredientService: IngredientService = inject(IngredientService);

    ingredientInputControl = new FormControl('');
    filteredIngredients: Observable<string[]> | undefined;

    @Output() addIngredientEvent = new EventEmitter<Ingredient>();
    ingredientList: Ingredient[] = [];

    ngOnInit(): void {
        this.filteredIngredients = this.ingredientInputControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
        );
    }

    private _filter(value: string): string[] {
        return this.ingredientService.getIngredientNamesContainExpression(value.toLowerCase());
    }

    addIngredientToList() {
        const expression = this.ingredientInputControl.value;
        const ingredient = this.ingredientService.getIngredientByName(expression || '');

        if(ingredient !== undefined) {
            this.ingredientList.push(ingredient);
            this.addIngredientEvent.emit(ingredient);
        }
    }
}
