import { Component, OnInit } from '@angular/core';
import { Post } from '../models/posts.models';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragdisabledService } from '../services/dragdisabled.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  dragEnabled: boolean;
  posts: Post[];
  postsSubscription: Subscription;
  dragSubscription: Subscription;

  constructor(private postService: PostService, private router: Router, private dragDisabledService: DragdisabledService) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPosts();

    this.dragSubscription = this.dragDisabledService.dragSubject.subscribe(
      (dragEnabled: boolean) => {
        this.dragEnabled = dragEnabled;
      }
    );
    this.dragDisabledService.allowDrag();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.posts, event.previousIndex, event.currentIndex);
    this.postService.savePosts();
  }

}
