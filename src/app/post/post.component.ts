import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../models/posts.models";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
<<<<<<< HEAD
  @Input() nbPost: number;
=======
>>>>>>> parent of 45d7d02... modal working and dragging disabled

  constructor() { }

  ngOnInit() { }
 
  
}
