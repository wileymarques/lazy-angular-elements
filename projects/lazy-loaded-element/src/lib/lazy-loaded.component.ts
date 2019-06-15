import { Component, OnInit } from '@angular/core';

import { DataHandlerService } from 'data-handler';

@Component({
  selector: 'lib-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
})
export class LazyLoadedComponent implements OnInit {

  public receivedData: string;

  constructor(
    private dataHandlerService: DataHandlerService,
  ) { }

  public ngOnInit(): void {
    this.dataHandlerService.getData()
      .subscribe((newData: string) => {
        console.log('Lazy received data', newData);
        this.receivedData = newData;
      });
  }

}
