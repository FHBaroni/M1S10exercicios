import { Component, OnInit } from '@angular/core';
import bebidas from 'src/app/models/bebidas.models';
import { comidas } from 'src/app/models/comidas.models';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'NGF-pedido-lista',
  templateUrl: './pedido-lista.component.html',
  styleUrls: ['./pedido-lista.component.scss'],
})
export class PedidoListaComponent implements OnInit {
  listaItensPedido: comidas[] | bebidas[] = [];
  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.buscarItensPedido();
  }
  buscarItensPedido() {
    this.listaItensPedido = this.pedidoService.buscarItensPedido();
  }
  removerItem(item: comidas | bebidas) {
    this.pedidoService.removerItemPedido(item.id);
  }
  removerTudo() {
    this.pedidoService.limparPedido();
    this.buscarItensPedido();
  }
}
