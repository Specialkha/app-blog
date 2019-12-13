import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../models/posts.models";
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss']
})
export class PostHeaderComponent implements OnInit {


  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLikeit() {
    this.post.loveIts++;
    this.postService.savePosts();
  }

  onNotlikeit() {
    this.post.loveIts--;
    this.postService.savePosts();
  }

  onDelete(post: Post) {
    this.postService.removePost(post);
  }
}
