import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
 private loaderBSub$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
 loaderBSubObs$ = this.loaderBSub$.asObservable();
  constructor() { }

  sendStatus(status: boolean){
    this.loaderBSub$.next(status)
  }
}
