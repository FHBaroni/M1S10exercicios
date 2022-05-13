import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comidas } from '../models/comidas.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComidaService {
  constructor(private http: HttpClient) {}

  devolverComidas(): Observable<comidas[]> {
    return this.http.get<comidas[]>('http://localhost:3000/comidas');
  }
}
