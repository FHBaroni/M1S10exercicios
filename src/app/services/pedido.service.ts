import { Injectable } from '@angular/core';
import bebidas from '../models/bebidas.models';
import { comidas } from '../models/comidas.models';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  itensPedidoLista: comidas[] | bebidas[];
  constructor() {}

  getTotalItensPedido(): number {
    return this.itensPedidoLista.length;
  }

  adicionarItemPedido(item: comidas | bebidas) {
    this.itensPedidoLista.push(item);
  }

  limparPedido() {
    this.itensPedidoLista = [];
  }

  removerItemPedido(id: number) {
    const itemIndex = this.itensPedidoLista.findIndex((item) => item.id == id);
    this.itensPedidoLista.splice(itemIndex, 1);
  }

  buscarItensPedido(): comidas[] | bebidas[] {
    return this.itensPedidoLista;
  }
}
