import { Component, Injector } from '@angular/core';
import { ElementoComponent } from 'elemento';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-elements';
  mostra = false;

  constructor(injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const ElementoElement = createCustomElement(ElementoComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('elemento-element', ElementoElement);
  }

  mostrar() {
    // Create element
    const elementoEl: NgElement & WithProperties<ElementoComponent> =
      document.createElement('elemento-element') as any;

    const aquiEl = document.getElementById('aqui');

    aquiEl.appendChild(elementoEl);
  }

}
