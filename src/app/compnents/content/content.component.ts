import { Component, OnInit } from '@angular/core';
import { bebidas } from 'src/app/models/bebidas.models';
import { cards } from 'src/app/models/N_food.models';
import { bebida_mock } from 'src/app/utils/bebida-mock';
import { food_mock } from 'src/app/utils/food-mock';

@Component({
  selector: 'NGF-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  listaCards: cards[] = food_mock;

  constructor() {}

  ngOnInit(): void {}
}
