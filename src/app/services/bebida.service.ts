import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import bebidas from '../models/bebidas.models';

@Injectable({
  providedIn: 'root',
})
export class BebidaService {
  constructor(private http: HttpClient) {}

  devolverBebidas(): Observable<bebidas[]> {
    return this.http.get<bebidas[]>('http://localhost:3000/bebidas');
  }
}
