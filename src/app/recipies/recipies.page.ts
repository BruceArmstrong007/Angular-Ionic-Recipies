import { Component, OnInit } from '@angular/core';
import { RecipiesService } from './recipies.service';
import { Recipies } from './recipies.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {
  recipies: Recipies[];
  constructor(private recipiesService: RecipiesService) {
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.recipies = this.recipiesService.getAllRecipies();
  }

}
