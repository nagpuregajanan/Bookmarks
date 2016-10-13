import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NgbModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { MyAppModule } from './my-app-module.component';
import { ManageDialog } from './manage-dialog.component';
import { ListService } from './list.service';

@NgModule({
  imports: [BrowserModule, HttpModule, NgbModule, DragulaModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [AppComponent, MyAppModule, ManageDialog],
  bootstrap: [AppComponent],
  providers: [ListService]
})

export class AppModule { }
