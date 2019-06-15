import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';

import { DataHandlerService } from 'data-handler';
import { LazyLoadedComponent } from 'lazy-loaded-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public data: string;
  public newData: string;

  constructor(
    private injector: Injector,
    private dataHandlerService: DataHandlerService,
  ) {
    const lazyLoadedComponent = createCustomElement(LazyLoadedComponent, {injector});
    customElements.define('lazy-loaded-element', lazyLoadedComponent);
  }

  public ngOnInit(): void {
    this.dataHandlerService.getData()
      .subscribe((newData: string) => {
        console.log('newData', newData);
        this.newData = newData;
      });
  }

  public updateData(): void {
    this.dataHandlerService.setData(this.data);
  }

  public showLazyLoadedComponent(): void {
    const lazyLoadedElementEl: NgElement & WithProperties<LazyLoadedComponent> =
      document.createElement('lazy-loaded-element') as any;

    const wrapperEl = document.getElementById('wrapper');

    wrapperEl.appendChild(lazyLoadedElementEl);
  }

}
