import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Post } from "../models/posts.models";
import { PostService } from '../services/post.service';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
<<<<<<< HEAD
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../form-modal/form-modal.component';
=======
>>>>>>> parent of 45d7d02... modal working and dragging disabled


@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss']
})
export class PostHeaderComponent implements OnInit {


  @Input() post: Post;
  @Input() id: number;
  @Input() nbPost: number;

<<<<<<< HEAD
  noSort: boolean = false;

  constructor(private postService: PostService, private modalService: ModalDialogService, private viewRef: ViewContainerRef, private modalServices: NgbModal) { }
=======
  constructor(private postService: PostService, public modalService: ModalDialogService, public viewRef: ViewContainerRef) { }
>>>>>>> parent of 45d7d02... modal working and dragging disabled

  ngOnInit() {
  }

  onLikeit() {
    this.post.loveIts++;
  }

  onNotlikeit() {
    this.post.loveIts--;
  }

  openNewDialog() {
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
            }, 20);
          })
        },
        {
          text: 'Annuler',
          buttonClass: 'btn btn-danger',
        }
      ]
    });
  }
}
