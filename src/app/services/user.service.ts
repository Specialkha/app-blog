import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { Subject } from 'rxjs';
import * as admin from 'firebase-admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    admin.auth().createUser({
      email: user.email,
      emailVerified: false,
      phoneNumber: '',
      password: user.password,
      displayName: user.lastName + ' ' + user.firstName,
      photoURL: '',
      disabled: false
    }).then((result) => {
      console.log(result);
    })
    this.emitUsers();
  }

  constructor() { }
}
