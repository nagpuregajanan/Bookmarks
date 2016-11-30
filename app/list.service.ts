import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { MyApp } from './my-app';
import { User } from './user';
import { Catalog } from './app-catalog';
import { Rule } from './rule';

@Injectable()

export class ListService {

  private myAppsUrl: string = 'app/paths'; //url to the web api
  private url: string = 'app/rules'; //url to the web api
  // private headers = new Headers({ 'content-type': 'application/json' });

  constructor(private http: Http) { }

  errorHandler(error: any): Promise<any> {
    console.info("An error occured.", error);
    return Promise.reject(error.message || error);
  }

  // update(catalog: Catalog, priority: string): Promise<Catalog> {
  //   const url = `${this.myAppsUrl}/${catalog.id}`;
  //   return this.http
  //     .put(url, JSON.stringify( { AppOrder: priority } ), { headers: this.headers })
  //     .toPromise()
  //     .then(() => catalog)
  //     .catch(error => console.log(error));
  // }

  getCurrentUser(): Promise<User> {
    return this.http.get(this.myAppsUrl).toPromise().then((response: any) => response.json().data.currentUser as User).catch(this.errorHandler);
  }

  getCatalogs(): Promise<Catalog[]> {
    return this.http.get(this.myAppsUrl).toPromise().then((response) => response.json().data.catalogs as Catalog[]).catch(this.errorHandler);
  }

  getApps(): Promise<MyApp[]> {
    return this.http.get(this.myAppsUrl).toPromise().then((response) => response.json().data.myApps as MyApp[]).catch(this.errorHandler);
  }
  getRules(): Promise<Rule[]> {
    return this.http.get(this.myAppsUrl).toPromise().then((response) => response.json().data.rules as Rule[]).catch(this.errorHandler);
  }
}