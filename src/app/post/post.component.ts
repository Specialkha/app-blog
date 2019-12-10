import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../models/posts.models";
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() { }
   

  onLikeit() {
    this.post.loveIts++;
    this.postService.savePosts();
  }

  onNotlikeit() {
    this.post.loveIts--;
    this.postService.savePosts();
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }
}
