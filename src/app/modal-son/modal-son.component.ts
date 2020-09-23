import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-son',
  templateUrl: './modal-son.component.html',
  styleUrls: ['./modal-son.component.css'],
})
export class ModalSonComponent implements OnInit {
  @Input()
  modal: BsModalRef;

  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  teste() {
    this.modal.hide();
  }
}
