import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entre } from '../models/entre.model';
@Injectable({
  providedIn: 'root'
})
export class EntreService {
  private url = 'http://localhost:7000/api/entre';
  constructor(private http: HttpClient) { }

   addEntre(entre: Entre): Observable<Entre> {
    return this.http.post<Entre>(this.url, entre);
   }
    getEntre(): Observable<Entre[]> {
      return this.http.get<Entre[]>(this.url);
}

    deleteAll(): Observable<any> {
      return this.http.delete(this.url);
    }      
}