import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAvn9T0CJFYaUQUTWRFcNaeJcLPDuCfN8o",
      authDomain: "app-blog-29d84.firebaseapp.com",
      databaseURL: "https://app-blog-29d84.firebaseio.com",
      projectId: "app-blog-29d84",
      storageBucket: "app-blog-29d84.appspot.com",
      messagingSenderId: "395512443976",
      appId: "1:395512443976:web:1a8695590fadac0018147d"
    };
    firebase.initializeApp(firebaseConfig);
  }
}