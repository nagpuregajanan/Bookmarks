import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
// import { MyAppModuleComponent } from './my-app-module.component';
// import { ManageDialogComponent } from './manage-dialog.component';
// import { HeroFormComponent } from './hero-form.component';
import { OAHelperComponent } from './oa-helper.component';

import { ListService } from './list.service';

@NgModule({
  imports: [BrowserModule, HttpModule, DragulaModule, FormsModule, NgbModule.forRoot(), InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [AppComponent, OAHelperComponent],// MyAppModuleComponent, ManageDialogComponent,, HeroFormComponent
  bootstrap: [AppComponent],
  providers: [ListService]
})

export class AppModule { }
