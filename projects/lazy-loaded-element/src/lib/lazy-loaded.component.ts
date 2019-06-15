import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lazy-loaded',
  template: `
    <p>
      LazyLoaded Component works!
    </p>
  `,
  styles: []
})
export class LazyLoadedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
