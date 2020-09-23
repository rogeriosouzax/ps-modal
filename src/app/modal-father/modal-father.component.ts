import { Component, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-father',
  templateUrl: './modal-father.component.html',
  styleUrls: ['./modal-father.component.css'],
})
export class ModalFatherComponent implements OnInit {
  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  open(content: any) {
    this.modalRef = this.modalService.show(content, {
      class: 'modal-dialog-centered',
      backdrop: 'static',
      animated: true,
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }
}
