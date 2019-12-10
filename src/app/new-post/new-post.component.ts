import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from "../models/posts.models";


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      loveIts: ['0'],
      timestamp: Date
    })
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const text = this.postForm.get('text').value;
    const loveIts = this.postForm.get('loveIts').value;
    const newPost = new Post(title, text, loveIts, new Date);
    this.postService.createNewPost(newPost);
    this.router.navigate(['/Posts']);
  }
}
