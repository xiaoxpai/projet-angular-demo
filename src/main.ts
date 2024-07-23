import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import {provideRouter} from '@angular/router'; //已在app.config.ts定义
// import { RouteConfig  } from './app/app.routes';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// bootstrapApplication(AppComponent, {
//   providers: [provideProtractorTestingSupport(), provideRouter(RouteConfig)],
// }).catch((err) => console.error(err));