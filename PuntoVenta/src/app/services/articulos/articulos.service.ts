import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/shared/models/articulos.interface';
@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private readonly apiUrlController: string =`${environment.API_URL }/api/Articulos`;
  constructor(private api: HttpClient, private router: Router) { }

  add(item: Articulo): Observable<any> {
    return this.api.post<any>(this.apiUrlController, item);
  }

  listArticulos(): Observable<any> {
    return this.api.get<Articulo[]>(this.apiUrlController);
  }
  get(codigo: string): Observable<any> {
    return this.api.get(`${this.apiUrlController}/${codigo}`) ;
  }

  update(item: Articulo): Observable<any> {
    return this.api.put(this.apiUrlController, item);
  }

  delete(codigo: string): Observable<any> {
    return this.api.delete(`${this.apiUrlController}/${codigo}`);
  }


}
