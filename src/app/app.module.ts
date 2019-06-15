import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LazyLoadedComponent } from 'lazy-loaded-element';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LazyLoadedComponent],
})
export class AppModule { }
