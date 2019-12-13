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
import { MatButtonModule, MatDialogModule } from '@angular/material';


const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'newpost', component: NewPostComponent },
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
    FooterComponent
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
    MatButtonModule, MatDialogModule
  ],
  // exports: [
  //   MatButtonModule, MatDialogModule
  // ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
