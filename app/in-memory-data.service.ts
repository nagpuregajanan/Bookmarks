import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Rule } from './rule';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let myApps = [
      { id: 11, title: 'Mr. Nice', url: 'https://www.google.co.in/', icon: "glyphicon glyphicon-asterisk", mandatory: true, defaultAppOrder: 0 },
      { id: 12, title: 'Narco', url: 'https://www.fb.co.in', icon: "glyphicon glyphicon-music", mandatory: true, defaultAppOrder: 0 },
      { id: 13, title: 'Bombasto', url: 'https://www.yahoo.co.in', icon: "glyphicon glyphicon-heart", mandatory: true, defaultAppOrder: 0 },
      { id: 14, title: 'Celeritas', url: 'https://www.yoogle.co.in', icon: "glyphicon glyphicon-ok", mandatory: true, defaultAppOrder: 0 },
      { id: 15, title: 'Magneta', url: 'https://www.pint.co.in', icon: "glyphicon glyphicon-cog", mandatory: true, defaultAppOrder: 0 },
      { id: 16, title: 'RubberMan', url: 'https://www.bing.co.in', icon: "glyphicon glyphicon-qrcode", mandatory: true, defaultAppOrder: 0 },
      { id: 17, title: 'Dynama', url: 'https://www.olx.co.in', icon: "glyphicon glyphicon-ok-sign", mandatory: true, defaultAppOrder: 0 },
      { id: 18, title: 'Dr IQ', url: 'https://www.pix.co.in', icon: "glyphicon glyphicon-leaf", mandatory: true, defaultAppOrder: 0 },
      { id: 19, title: 'Magma', url: 'https://www.sent.co.in', icon: "glyphicon glyphicon-certificate", mandatory: true, defaultAppOrder: 0 },
      { id: 20, title: 'Tornado', url: 'https://www.aol.co.in', icon: "glyphicon glyphicon-cd", mandatory: true, defaultAppOrder: 0 }
    ];
    let catalogs = [
      { id: 11, title: 'Mr. Nice', UserLoginName: 111, AppOrder: "11,12,14,20" },
      { id: 12, title: 'Narco', UserLoginName: 112, AppOrder: "15,16,17,19" },
      { id: 13, title: 'Bombasto', UserLoginName: 113, AppOrder: "12,13,16" },
      { id: 14, title: 'Celeritas', UserLoginName: 114, AppOrder: "11" },
      { id: 15, title: 'Magneta', UserLoginName: 115, AppOrder: "18,19,20" }
    ];

    let rules = [
      { title: 'Exchange', head: 'Exchange', formula: 100, value: 2 },
      { title: 'Exchange', head: 'Exchange', formula: 500, value: 4 },
      { title: 'Exchange', head: 'Exchange', formula: 1000, value: 5 },
      { title: 'Hire', head: 'Hire', formula: 5, value: 1 },
      { title: 'Hire', head: 'Hire', formula: 10, value: 2 },
      { title: 'Hire', head: 'Hire', formula: 20, value: 3 },
      { title: 'Hire', head: 'Hire', formula: 30, value: 4 },
      { title: 'Hire', head: 'Hire', formula: 50, value: 5 },
      { title: 'MSDN', head: 'MSDN', formula: 50, value: 1 },
      { title: 'MSDN', head: 'MSDN', formula: 100, value: 2 },
      { title: 'MSDN', head: 'MSDN', formula: 500, value: 3 },
      { title: 'MSDN', head: 'MSDN', formula: 1000, value: 5 },
      { title: 'Questionair', head: 'Questionair', formula: 1, value: 2 },
      { title: 'Stack', head: 'Stack', formula: 100, value: 2 },
      { title: 'Stack', head: 'Stack', formula: 500, value: 4 },
      { title: 'Stack', head: 'Stack', formula: 1000, value: 6 },
      { title: 'Stack', head: 'Stack', formula: 1500, value: 8 },
      { title: 'Stack', head: 'Stack', formula: 1999, value: 9 }
    ];

    // let rules = [{
    //   Exchange: [{ 100: 2 }, { 500: 4 }, { 1000: 5 }],
    //   Hire: [{ 5: 1 }, { 10: 2 }, { 20: 3 }, { 30: 4 }, { 50: 5 }],
    //   MSDN: [{ 50: 1 }, { 100: 2 }, { 500: 3 }, { 1000: 5 }],
    //   Questionair: [{ 1: 2 }],
    //   Stack: [{ 100: 2 }, { 500: 4 }, { 1000: 6 }, { 1500: 8 }, { 1999: 9 }]
    // }];
    let currentUser = { id: 111, name: 'Gajanan Nagpure', email: 'gajanan.nagpure@zevenseas.com' }
    let paths = { myApps: myApps, catalogs: catalogs, currentUser: currentUser, rules: rules }
    return { paths }
  }
}