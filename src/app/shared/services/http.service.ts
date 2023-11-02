import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImainRes } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl :string = `${environment.apiUrl}`
  constructor(
    private _http : HttpClient
  ) { }

  getData(): Observable<ImainRes>{
    return this._http.get<ImainRes>(this.apiUrl)
  }
}
