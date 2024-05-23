import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sortie } from '../models/sortie.model';
@Injectable({
  providedIn: 'root'
})
export class SortieService {
  private url = 'http://localhost:7000/api/sortie';
  constructor(private http: HttpClient) { }

  addSortie(sortie: Sortie): Observable<Sortie> {
    return this.http.post<Sortie>(this.url, sortie);
  }

  getSortie(): Observable<Sortie[]> {
    return this.http.get<Sortie[]>(this.url);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.url);
  }
}