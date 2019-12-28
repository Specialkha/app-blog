import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Post } from "../models/posts.models";
import { PostService } from '../services/post.service';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { DragdisabledService } from '../services/dragdisabled.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../form-modal/form-modal.component';


@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss']
})
export class PostHeaderComponent implements OnInit {


  @Input() post: Post;
  @Input() id: number;
  @Input() nbPost: number;

  noSort: boolean = false;

  constructor(private postService: PostService, private modalService: ModalDialogService, private viewRef: ViewContainerRef, private dragDisabledService: DragdisabledService, private modalServices: NgbModal) { }

  ngOnInit() {
  }

  onLikeit() {
    this.post.loveIts++;
  }

  onNotlikeit() {
    this.post.loveIts--;
  }

  onSaveList() {
    this.noSort = false;
    if (!this.noSort)
      this.postService.savePosts();
  }

  openNewDialogDelete() {
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

  openFormModal() {
    const modalRef = this.modalServices.open(FormModalComponent);
    modalRef.componentInstance.id = 10; // should be the id
    modalRef.result.then((result) => {
      let newPost = { title: result.titre, text: result.texte, loveIts: this.post.loveIts, date: new Date() };
      this.postService.editPost(newPost, this.nbPost);
    }).catch((error) => {
      console.log(error);
    });
  }

}