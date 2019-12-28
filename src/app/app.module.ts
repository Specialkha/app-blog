import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostHeaderComponent } from './post-header/post-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal/form-modal.component';
import { UserService } from './services/user.service';
import { AppUserListComponent } from './app-user-list/app-user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'newpost', component: NewPostComponent },
  { path: 'users', component: AppUserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: "", redirectTo: 'posts', pathMatch: 'full' },
  { path: "**", redirectTo: 'posts' }
]


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NewPostComponent,
    HeaderComponent,
    PostListComponent,
    PostHeaderComponent,
    FooterComponent,
    FormModalComponent,
    AppUserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ModalDialogModule.forRoot(),
    NgbModule
  ],
  providers: [
    PostService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FormModalComponent
  ]
})
export class AppModule { }
