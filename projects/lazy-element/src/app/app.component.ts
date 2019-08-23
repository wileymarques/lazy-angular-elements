import { Component } from '@angular/core';

@Component({
  // selector: 'le-root',
  template: `
    <h1>This is {{ title }}</h1>
    <le-subtitle></le-subtitle>
    <a title="subroute" routerLink="/subroute">
      Go to subroute
    </a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'lazy-element';
}
