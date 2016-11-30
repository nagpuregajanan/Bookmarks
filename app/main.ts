import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

import 'jquery';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
