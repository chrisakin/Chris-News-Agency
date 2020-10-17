// A service to get the API
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './posts'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()

export class ArticleService {
  config = environment;
  article: any;
  httpOptions:any;

  // Http option headers
  constructor(private http: HttpClient) { 
    this.httpOptions = new HttpHeaders({  
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET, PATCH, OPTIONS', 
      'Access-Control-Allow-Headers':'Content-Type, Authorization, Content-Length, X-Requested-With, Accept',
     });
   
  }

  // Using observables to get the data from the API
  getArticles(): Observable<Post> {
    this.article = this.http.get<Post>(`${this.config.articlesUrl}`);
    return this.article;
  }


  getArticle(name: string) {
    return this.http.get(`${this.config.articleUrl}` + name);
  }

}
