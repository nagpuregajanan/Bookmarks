import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DragulaService, DragulaDirective } from 'ng2-dragula/ng2-dragula';

import { ListService } from './list.service';
import { MyApp } from './my-app';
import { Catalog } from './app-catalog';

@Component({
  selector: 'manage-dialog',
  templateUrl: 'app/manage-dialog.component.html',
  styleUrls: ['app/manage-dialog.component.css'],
  viewProviders: [DragulaService]
  // providers: [NgbModalRef]
})
export class ManageDialog {

  closeResult: string;
  options: NgbModalOptions = {
    backdrop: false,
    keyboard: false,
    size: 'lg'
  };

  // getting subscribed and unsubscribed apps from app.component
  @Input()
  subApps: MyApp[];
  @Input()
  unSubApps: MyApp[];

  // sending new app order to the app.component
  @Output() saveCatalog = new EventEmitter<string>();

  constructor(private dragulaService: DragulaService, private modalService: NgbModal, private listService: ListService) {
    dragulaService.drag.subscribe((value) => {
      // console.log(`drag: ${value[0]}`);
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      // console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      // console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      // console.log(`out: ${value[0]}`);
      this.onOut(value.slice(1));
    });
  }

  save(): void {
    let appOrder: number[] = [];
    let appPriority: string = '';

    for (let i of this.subApps) {
      appOrder.push(i.id);
    }

    appPriority = appOrder.join();

    this.saveCatalog.emit(appPriority);
  }

  open(content: any, options: NgbModalOptions = { backdrop: 'static', keyboard: false, size: 'lg' }) {
    this.modalService.open(content, options).result.then((result) => {
      if (result === 'Save') {
        this.save();
      }
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed: ${this.getDismissReason(reason)}`
    })
  }

  private onDrag(args) {
    let [e, el] = args;
    // do something
  }

  private onDrop(args) {
    let [e, el] = args;
    // console.log(args);
    // do something
  }

  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }

  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by presing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      console.log(reason, ModalDismissReasons);
      return `with ${reason}`;
    }
  }
}