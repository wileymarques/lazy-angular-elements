import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { SubrouteComponent } from './subroute/subroute.component';

@NgModule({
  declarations: [
    AppComponent,
    SubtitleComponent,
    SubrouteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'subroute', component: SubrouteComponent },
    ])
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule {

  constructor(
    private injector: Injector,
  ) { }

  public ngDoBootstrap(): void {
    const lazyLoadedCustomElement = createCustomElement(
      AppComponent,
      {
        injector: this.injector,
      },
    );
    customElements.define('lazy-loaded', lazyLoadedCustomElement);
  }

}
