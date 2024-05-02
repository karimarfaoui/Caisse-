import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(),HttpClientModule]
=======

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(),provideAnimationsAsync(), provideAnimationsAsync()]
>>>>>>> cb4526b93aa707e41f69a15785bdab4933ba41de
};
