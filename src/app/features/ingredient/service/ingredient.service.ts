import { Injectable } from '@angular/core';
import {Ingredient} from "../../../core/models/ingredient";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  dbIngredients: Ingredient[] = [
    {
      "name": "Flour",
      "caloriesPerHundredGrams": 364,
      "fat": 1.2,
      "protein": 10.3,
      "carbohydrate": 73.1,
      "sugar": 0.4,
      "dietaryFiber": 2.8
    },
    {
      "name": "Chicken Breast",
      "caloriesPerHundredGrams": 165,
      "fat": 3.6,
      "protein": 31,
      "carbohydrate": 0,
      "sugar": 0,
      "dietaryFiber": 0
    },
    {
      "name": "Broccoli",
      "caloriesPerHundredGrams": 55,
      "fat": 0.6,
      "protein": 3.7,
      "carbohydrate": 11.2,
      "sugar": 1.1,
      "dietaryFiber": 3.3
    }
  ];
  constructor() { }

  getIngredientNamesContainExpression (expression: string) : string[] {
    let map: string[] = [];
    this.dbIngredients.forEach(ingredient => {
      if(ingredient.name.toLowerCase().includes(expression)) {
        map.push(ingredient.name);
      }
    })
    return map;
  }

  getIngredientByName(name: string) : Ingredient | undefined {
    return this.dbIngredients.find(ingredient => ingredient.name == name);
  }
}
