import { Component } from '@angular/core';

@Component({
  // selector: 'le-root',
  template: `
    <h1>This is {{ title }}</h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'lazy-element';
}
