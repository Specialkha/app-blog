import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragdisabledService {

  dragSubject = new Subject<boolean>();

  constructor() { 
    this.allowDrag();
  }

allowDrag() {
  this.dragSubject.next(true);
}

removeDrag() {
  this.dragSubject.next(false);
}


}
