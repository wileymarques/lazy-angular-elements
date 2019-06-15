import { Component, Injector } from '@angular/core';
import { LazyLoadedComponent } from 'lazy-loaded-element';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(injector: Injector) {
    const lazyLoadedComponent = createCustomElement(LazyLoadedComponent, {injector});
    customElements.define('lazy-loaded-element', lazyLoadedComponent);
  }

  showLazyLoadedComponent() {
    // Create element
    const lazyLoadedElementEl: NgElement & WithProperties<LazyLoadedComponent> =
      document.createElement('lazy-loaded-element') as any;

    const wrapperEl = document.getElementById('wrapper');

    wrapperEl.appendChild(lazyLoadedElementEl);
  }

}
