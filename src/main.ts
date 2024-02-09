import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { Task } from './app/entities/task';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(),
    provideHttpClient(),
    Task
  ]
}).catch((err) => console.error(err));
