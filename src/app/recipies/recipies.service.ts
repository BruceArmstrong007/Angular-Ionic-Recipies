import { Injectable } from '@angular/core';

import { Recipies } from './recipies.model';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {

  recipies: Recipies[]= [{
    id: 'r1',
    title: 'Schnitzsel',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
    ingredients: ['French Fries','Pork Meat','Salad']
  },
  {
    id: 'r2',
    title: 'Spaghetti',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/c/c4/Spaghetti_bolognese_%28hozinja%29.jpg',
    ingredients: ['Spaghetti','Meat','Tomato']
  }];

  constructor() { }

getAllRecipies(){
  return [...this.recipies];
}

getRecipie(recipieID: string){
  return {
    ...this.recipies.find(recipie => recipie.id === recipieID
  )};
}

deleteRecipie(recipieID: string){
  this.recipies = this.recipies.filter(recipie => recipie.id !== recipieID);
}

}
