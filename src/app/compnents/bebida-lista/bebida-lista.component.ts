import { Component, OnInit } from '@angular/core';
import bebidas from 'src/app/models/bebidas.models';
import { BebidaService } from 'src/app/services/bebida.service';
import { PedidoService } from 'src/app/services/pedido.service';
@Component({
  selector: 'NGF-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.scss'],
})
export class BebidaListaComponent implements OnInit {
  listaBebidas: bebidas[] = [];
  constructor(
    private bebidaService: BebidaService,
    private pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this.bebidaService.devolverBebidas().subscribe((resultado: bebidas[]) => {
      this.listaBebidas = resultado;
    });
  }

  adiciconarBebida(bebida: bebidas) {
    this.pedidoService.adicionarItemPedido(bebida);
  }
}
