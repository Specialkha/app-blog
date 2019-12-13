import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Post } from "../models/posts.models";
import { PostService } from '../services/post.service';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { DragdisabledService } from '../services/dragdisabled.service';


@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss']
})
export class PostHeaderComponent implements OnInit {


  @Input() post: Post;


  constructor(private postService: PostService, private modalService: ModalDialogService, private viewRef: ViewContainerRef, private dragDisabledService: DragdisabledService) { }

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

  openNewDialog() {
    this.dragDisabledService.removeDrag();
    this.modalService.openDialog(this.viewRef, {
      title: 'Confirmez-vous la suppression de ce post ?',
      childComponent: SimpleModalComponent,
      data: {
        text: 'Cette action est irréversible.'
      },
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      actionButtons: [
        {
          text: 'Valider',
          buttonClass: 'btn btn-success',
          onAction: () => new Promise((resolve: any) => {
            setTimeout(() => {
              this.postService.removePost(this.post);
              resolve();
              this.dragDisabledService.allowDrag()
            }, 20);
          })
        },
        {
          text: 'Annuler',
          buttonClass: 'btn btn-danger',
          onAction: () => new Promise((reject: any) => {
            reject();
            this.dragDisabledService.allowDrag()
          })
        },
      ]
    });
  }
}