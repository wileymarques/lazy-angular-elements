import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private data: BehaviorSubject<string> = new BehaviorSubject(undefined);

  setData(newValue: string): Observable<string> {
    this.data.next(newValue);
    return this.getData();
  }

  getData(): Observable<string> {
    return this.data;
  }
}
