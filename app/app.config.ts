import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes), provideClientHydration()]
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)]
};
