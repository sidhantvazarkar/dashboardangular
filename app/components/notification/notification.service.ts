import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private visibilitySubject = new BehaviorSubject<boolean>(false);
  visibility$ = this.visibilitySubject.asObservable();

  toggleVisibility() {
    this.visibilitySubject.next(!this.visibilitySubject.value);
  }
}
