import { Component, OnInit } from '@angular/core';
import bebidas from 'src/app/models/bebidas.models';
import { BebidaService } from 'src/app/services/bebida.service';
@Component({
  selector: 'NGF-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.scss'],
})
export class BebidaListaComponent implements OnInit {
  listaBebidas: bebidas[] = [];
  constructor(private bebidaService: BebidaService) {}

  ngOnInit(): void {
    this.bebidaService.devolverBebidas().subscribe((resultado: bebidas[]) => {
      this.listaBebidas = resultado;
    });
  }
}
