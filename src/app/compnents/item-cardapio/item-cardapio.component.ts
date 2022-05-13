import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import bebidas from 'src/app/models/bebidas.models';
import { comidas } from 'src/app/models/comidas.models';

@Component({
  selector: 'NGF-item-cardapio',
  templateUrl: './item-cardapio.component.html',
  styleUrls: ['./item-cardapio.component.scss'],
})
export class ItemCardapioComponent {
  quantidade = 0;

  @Input() item?: comidas | bebidas;
  @Output() adicionaAoPedido = new EventEmitter<comidas | bebidas>();
  @Output() adicionaItensAoPedido = new EventEmitter();

  adicionarAoPedido() {
    this.adicionaAoPedido.emit(this.item);
  }

  adicionaritensAoPedido() {
    const itens = {
      item: this.item,
      quantidade: this.quantidade,
    };
    this.adicionaItensAoPedido.emit(itens);
  }
  aumentarQuantidade() {
    this.quantidade += 1;
  }
  diminuirQuantidade() {
    this.quantidade -= 1;
  }
}
