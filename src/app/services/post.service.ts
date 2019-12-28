import { Injectable } from '@angular/core';
import { Post } from "../models/posts.models";
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  savePosts() {
    var postx = [];
    this.posts.forEach(post => {
      postx.push({
        title: post.title,
        text: post.text,
        loveIts: post.loveIts,
        date: post.date ? post.date.getTime() : new Date()
      });
    });
    postx.sort((a, b) => b.loveIts-a.loveIts);
    firebase.database().ref('/posts').set(postx);
    this.emitPosts();
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        var postx = data.val() ? data.val() : [];
        this.posts = [];
        postx.forEach(post => {
          this.posts.push({
            title: post.title,
            text: post.text,
            loveIts: post.loveIts,
            date: new Date(post.date)
          });
        });
        this.posts.sort((a, b) => b.loveIts-a.loveIts);
        this.emitPosts();
      });
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
  }

  editPost(post: Post, nbPost: number) {
    this.posts.splice(nbPost, 1, post);
    this.savePosts();
  }
}