import { Injectable } from '@angular/core';
import bebidas from '../models/bebidas.models';
import { comidas } from '../models/comidas.models';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  itensPedidoLista: comidas[] | bebidas[] = [];

  constructor() {}

  buscarTotalItensPedido(): number {
    return this.itensPedidoLista.length;
  }

  adicionarItemPedido(item: comidas | bebidas) {
    this.itensPedidoLista.push(item);
    console.log('itensPedidoLista', this.itensPedidoLista);
  }

  adicionarItensPedido(item: comidas | bebidas, quantidade: number) {
    const itens = Array(quantidade).fill(item);
    this.itensPedidoLista.push(...itens);
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
