import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import bebidas from 'src/app/models/bebidas.models';
import { comidas } from 'src/app/models/comidas.models';

@Component({
  selector: 'NGF-item-cardapio',
  templateUrl: './item-cardapio.component.html',
  styleUrls: ['./item-cardapio.component.scss'],
})
export class ItemCardapioComponent {
  @Input() item?: comidas | bebidas;

  @Output() adicionaAoPedido = new EventEmitter<comidas | bebidas>();
  adicionarAoPedido() {
    this.adicionaAoPedido.emit(this.item);
  }
}
