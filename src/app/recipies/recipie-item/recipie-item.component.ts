import { Component, Input, OnInit } from '@angular/core';
import { Recipies } from '../recipies.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.scss'],
})
export class RecipieItemComponent implements OnInit {
@Input() recipieItem: Recipies;
  constructor() { }

  ngOnInit() {}

}
