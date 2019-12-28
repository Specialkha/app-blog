import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  id: number;
  myForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }

  closeModal() {
    this.activeModal.close('Close Clicked');
  }

  createForm() {
    this.myForm = new FormGroup({
      'titre': new FormControl(),
      'texte': new FormControl()
    });
  }
  
  submitForm() {
    this.activeModal.close(this.myForm.value);
  }
}

