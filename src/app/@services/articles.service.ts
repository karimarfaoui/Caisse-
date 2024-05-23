import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private url = 'http://localhost:7000/api/article';


  constructor( private http: HttpClient ) { }
  fetchArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url)
  }
  create(data:any):Observable<any>{
    return this.http.post(this.url,data);
  }
  delete(code_pro:any):Observable<any>{
    return this.http.delete(this.url+'/'+code_pro);
  }
  find(code_pro:any):Observable<any>{
    return this.http.get(this.url+'/'+code_pro);
  }
  update():Observable<any>{
    return this.http.put(this.url+'/', {});
  }
  updateData(code_pro:any, newData:any):Observable<any>{
    return this.http.put(this.url+'/'+code_pro, newData);
  }
}
