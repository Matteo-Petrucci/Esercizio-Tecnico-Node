import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreaArticoloService {

  private apiUrl = 'https://essercizio-tecnico-node.free.beeceptor.com';

  constructor(private http: HttpClient) {}

  salvaArticolo(data: any): Observable<any> {
    const endpoint = `${this.apiUrl}/salva-articolo`;
    return this.http.post<any>(endpoint, data);
  }
}
