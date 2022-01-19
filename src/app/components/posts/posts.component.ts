import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: any[] = [];
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.url).subscribe((value: any) => {
      this.posts = value;
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };

    this.http.post(this.url, JSON.stringify(post)).subscribe((id) => {
      post['id'] = id;

      this.posts.splice(0, 0, post);
    });
  }
}
