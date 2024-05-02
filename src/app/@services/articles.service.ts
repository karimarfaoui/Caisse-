import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { environment } from '../../env/env';
>>>>>>> aziz
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor( private http: HttpClient ) { }

  login(loginUser: any): any {
    return 
  }
}
