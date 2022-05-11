import { Component, Input, OnInit } from '@angular/core';
import { bebidas } from 'src/app/models/bebidas.models';
import { comidas } from 'src/app/models/comidas.models';

@Component({
  selector: 'NGF-item-cardapio',
  templateUrl: './item-cardapio.component.html',
  styleUrls: ['./item-cardapio.component.scss'],
})
export class ItemCardapioComponent implements OnInit {
  @Input() item?: comidas | bebidas;

  ngOnInit(): void {}
}
