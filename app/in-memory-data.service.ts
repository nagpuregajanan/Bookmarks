import { InMemoryDbService } from 'angular-in-memory-web-api';

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
    ]
    let currentUser = {id: 111, name: 'Gajanan Nagpure', email: 'gajanan.nagpure@zevenseas.com'}
    let paths = {myApps: myApps, catalogs: catalogs, currentUser: currentUser}
    return {paths}
  }
}