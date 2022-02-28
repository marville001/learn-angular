import { Component, Injectable, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((value: any) => {
      this.posts = value;
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };

    this.postService.createPost(post).subscribe((id) => {
      post['id'] = id;

      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post: any) {
    
      this.postService.updatePost(post).subscribe((response) => {
        console.log(response);
      });
  }

  deletePost(post: any) {
    this.postService.deletePost(post).subscribe((response) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
