import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImainRes } from '../models/cards';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl :string = `${environment.apiUrl}`;
  private _loaderService = inject(LoaderService)
  constructor(
    private _http : HttpClient
  ) { }

  getData(): Observable<ImainRes>{
    this._loaderService.sendStatus(true)
    return this._http.get<ImainRes>(this.apiUrl)
  }
}
