import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptProvider } from './jwt-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    // Keeps Angular happy in standalone apps (book expects this)
    importProvidersFrom(HttpClientModule),

    // Enables interceptors registered through DI
    provideHttpClient(withInterceptorsFromDi()),

    // Your JWT interceptor provider
    authInterceptProvider
  ]
};