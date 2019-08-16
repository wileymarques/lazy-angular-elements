import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="downloadLazyModule()">Download lazy module</button>
    <div *ngIf="showLazyLoadedElement === true">
      <lazy-loaded></lazy-loaded>
    </div>
  `,
  styles: []
})
export class AppComponent {

  public showLazyLoadedElement = false;

  public downloadLazyModule(): void {
    this.createScriptDownloadElement();
  }

  private createScriptDownloadElement(): void {
    const lazyLoadedScriptTag = document.createElement('script');
    lazyLoadedScriptTag.src = 'http://localhost:4201/main.js';
    lazyLoadedScriptTag.onload = () => this.enableShowLazyLoadedElement();
    document.head.appendChild(lazyLoadedScriptTag);
  }

  public enableShowLazyLoadedElement(): void {
    // const lazyLoadedElementEl = document.createElement('lazy-loaded');
    // const wrapperEl = document.getElementById('wrapper');
    // wrapperEl.appendChild(lazyLoadedElementEl);
    this.showLazyLoadedElement = true;
  }

}
