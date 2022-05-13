import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'NGF-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  qtdeItemPedido = 0;
  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {}

  buscarTotalItem() {
    return this.pedidoService.buscarTotalItensPedido();
  }
}
