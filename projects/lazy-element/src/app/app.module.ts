import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { SubtitleComponent } from './subtitle/subtitle.component';

@NgModule({
  declarations: [
    AppComponent,
    SubtitleComponent,
  ],
  imports: [
    BrowserModule,
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
