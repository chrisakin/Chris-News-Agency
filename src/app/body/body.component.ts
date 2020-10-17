import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  articles: any;
  loading = false;
  success = '';
  error = '';
  constructor(private articleService: ArticleService ) { }


  ngOnInit() {


this.articleService.getArticles()
.subscribe(
  res => {
    
    this.articles = res;
  },
  err => {
    console.log("Error occured");
  }
);
}


}