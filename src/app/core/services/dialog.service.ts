import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private closeRequest = new ReplaySubject<boolean>();

  closeRequest$ = this.closeRequest.asObservable();

  constructor() { }

  isClose(close: boolean) {
    this.closeRequest.next(close);
  }
}
