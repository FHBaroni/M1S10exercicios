import { Component, OnInit } from '@angular/core';
import { comidas } from 'src/app/models/comidas.models';
import { ComidaService } from 'src/app/services/comida.service';
import { PedidoService } from 'src/app/services/pedido.service';
@Component({
  selector: 'NGF-comida-lista',
  templateUrl: './comida-lista.component.html',
  styleUrls: ['./comida-lista.component.scss'],
})
export class ComidaListaComponent implements OnInit {
  listaComidas: comidas[] = [];
  constructor(
    private comidaService: ComidaService,
    private pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this.comidaService.devolverComidas().subscribe((resultado: comidas[]) => {
      this.listaComidas = resultado;
    });
  }

  adicionarComida(comida: comidas) {
    this.pedidoService.adicionarItemPedido(comida);
  }

  adicionarComidaComQuantidade(itemComQuantidade: any) {
    this.pedidoService.adicionarItensPedido(
      itemComQuantidade.item,
      itemComQuantidade.quantidade
    );
  }
}
