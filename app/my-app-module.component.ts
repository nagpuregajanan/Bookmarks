import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DragulaService, DragulaDirective } from 'ng2-dragula/ng2-dragula';

import { ListService } from './list.service';
import { MyApp } from './my-app';
import { Catalog } from './app-catalog';
import { User } from './user';

@Component({
  selector: 'my-app-module',
  templateUrl: 'app/my-app-module.component.html',
  styleUrls: ['app/my-app-module.component.css'],
  viewProviders: [DragulaService]
  // providers: [NgbModalRef]
})
export class MyAppModule {

  currentPage: number = 1;
  pagingSize: number = 2;
  filteredResults: MyApp[] = [];
  myApps: MyApp[];
  noOfApps: number = 0;
  currentUser: User;
  subscribedAppList: MyApp[] = [];
  unSubscribedAppList: MyApp[] = [];
  catalog: Catalog;

  constructor(private listService: ListService) { }

  filterData() {
    this.noOfApps = this.subscribedAppList.length;
    let begin = ((this.currentPage - 1) * this.pagingSize), end = begin + this.pagingSize;
    this.filteredResults = this.subscribedAppList.length ? this.subscribedAppList.slice(begin, end) : [];
  };

  pageChanged() {
    this.filterData();
  }

  getCatalog() {
    this.listService.getCatalogs().then(data => {
      this.catalog = data.find(cat => this.currentUser.id === cat.UserLoginName);
      this.getUserPersonalization();
    }, error => console.log(error, "Error getting my aps."));
  }

  getUserPersonalization() {
    let appOrder: any[];
    appOrder = this.catalog.AppOrder.split(',');
    // copy the personalized my apps
    let len: number = this.myApps.length;
    for (let i = 0; i < appOrder.length; i++) {
      loopJ:
      for (let j = 0; j < len; j++) {
        if (this.myApps[j].id == appOrder[i]) {
          this.subscribedAppList.push(this.myApps[j]);
          this.myApps.splice(j, 1);
          if (len > 0)
            j--;
          len--;
          break loopJ;
        }
      }
    }
    this.unSubscribedAppList = this.myApps;
    this.filterData();
  }

  // will be called when save button of manage modal will be clicked by event emitted by EventEmitter from manage-dialog component.
  saveCatalog(orderToSave: string) {
    // console.log(orderToSave);

    // for now manually changing the order
    this.catalog.AppOrder = orderToSave;
    this.getUserPersonalization();
  }

  ngOnInit(): void {
    this.listService.getCurrentUser().then(data => {
      this.currentUser = data;
      // get all apps
      this.listService.getApps().then(apps => {
        this.myApps = apps;
        this.getCatalog();
      }, error => console.log(error, "Error getting my aps."));
    }, error => console.log(error, "Error getting my aps."));
  }
}