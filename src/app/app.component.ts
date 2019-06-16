import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
// import system from 'systemjs';

import { DataHandlerService } from 'data-handler';
// import { LazyLoadedComponent } from 'lazy-loaded-element';

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
  ) { }

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

  public loadLazyLoadedComponent(): void {
    const lazyLoadedScriptTag = document.createElement('script');
    lazyLoadedScriptTag.src = 'http://localhost:8080/main.js';
    lazyLoadedScriptTag.onload = () => this.appendLazyLoadedElement();
    document.head.appendChild(lazyLoadedScriptTag);
  }

  public appendLazyLoadedElement(): void {
    const lazyLoadedElementEl = document.createElement('lazy-loaded');
    const wrapperEl = document.getElementById('wrapper');
    wrapperEl.appendChild(lazyLoadedElementEl);
  }

  // public async loadLazyLoadedComponent(): Promise<void> {

  //   // const lazyLoadedModule = await import('lazy-loaded-element');
  //   // const { LazyLoadedComponent } = lazyLoadedModule;

  //   // const lazyLoadedComponent = createCustomElement(
  //   //   LazyLoadedComponent,
  //   //   {
  //   //     injector: this.injector,
  //   //   },
  //   // );
  //   // customElements.define('lazy-loaded-element', lazyLoadedComponent);

  //   // const lazyLoadedElementEl = document.createElement('lazy-loaded-element') as any;

  //   // const wrapperEl = document.getElementById('wrapper');

  //   // wrapperEl.appendChild(lazyLoadedElementEl);
  // }

}
