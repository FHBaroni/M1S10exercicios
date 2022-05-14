import { Component, OnInit } from '@angular/core';
import bebidas from 'src/app/models/bebidas.models';
import { comidas } from 'src/app/models/comidas.models';
import { PedidoService } from 'src/app/services/pedido.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você excluirá todo o pedido',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Foi engano',
      confirmButtonText: 'Sim, apagar pedido!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.pedidoService.limparPedido();
        this.buscarItensPedido();
        Swal.fire('Apagado', 'Seu pedido inteiro foi apagado.', 'error');
      }
    });
  }

  alertaRemove() {
    Swal.fire('', 'item removido com sucesso!', 'error');
  }
}
