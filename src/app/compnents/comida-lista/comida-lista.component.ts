import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { comidas } from 'src/app/models/comidas.models';
import { comida_mock } from 'src/app/utils/comida-mock';

@Component({
  selector: 'NGF-comida-lista',
  templateUrl: './comida-lista.component.html',
  styleUrls: ['./comida-lista.component.scss'],
})
export class ComidaListaComponent implements OnInit {
  listaComidas: comidas[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<comidas[]>('http://localhost:3000/comidas')
      .subscribe((resultado) => {
        this.listaComidas = resultado;
      });
  }
}
