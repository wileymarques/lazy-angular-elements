import { Component, Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="downloadLazyModule()">Download lazy module</button>
    <div *ngIf="showLazyLoadedElement === true">
      <lazy-loaded></lazy-loaded>
    </div>
    <div>
      <a title="subroute" routerLink="/subroute">
        Go to subroute
      </a>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {

  constructor(
    private injector: Injector,
  ) { }

  public showLazyLoadedElement = false;
  private lazyLoadedModulePath = 'http://localhost:4201/main.js';

  public downloadLazyModule(): void {
    // debugger;
    // window['System'].import(modulePath)
    //   .then((lazyLoadedModule) => {
    //     debugger;
    //     // this.loadLazyLoadedComponent(lazyLoadedModule);
    //   })
    // .catch((error) => {
    //   debugger;
    // });
    this.createScriptDownloadElement();
  }

  private createScriptDownloadElement(): void {
    const lazyLoadedScriptTag = document.createElement('script');
    lazyLoadedScriptTag.src = this.lazyLoadedModulePath;
    lazyLoadedScriptTag.onload = (e) => {
      // debugger;
      this.enableShowLazyLoadedElement();
      // window['System'].import(this.lazyLoadedModulePath)
      //   .then((lazyLoadedModule) => {
      //     debugger;
      //     // this.loadLazyLoadedComponent(lazyLoadedModule);
      //   })
      //   .catch((error) => {
      //     debugger;
      //   });
    };
    document.head.appendChild(lazyLoadedScriptTag);
  }

  private enableShowLazyLoadedElement(): void {
    // debugger;
    // const lazyLoadedElementEl = document.createElement('lazy-loaded');
    // const wrapperEl = document.getElementById('wrapper');
    // wrapperEl.appendChild(lazyLoadedElementEl);
    this.showLazyLoadedElement = true;
  }

  // public async loadLazyLoadedComponent(lazyLoadedModule): Promise<void> {

  //   debugger;

  //   const { LazyLoadedComponent } = lazyLoadedModule;

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
