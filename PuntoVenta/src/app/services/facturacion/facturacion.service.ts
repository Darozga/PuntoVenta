import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Factura } from 'src/app/shared/models/factura.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  private readonly apiUrlController: string =`${environment.API_URL }/api/Facturacion`;

  constructor(private api: HttpClient, private router: Router) { }


  add(item: Factura): Observable<any> {
    return this.api.post<any>(this.apiUrlController, item);
  }
}
