import { Component, OnInit, inject } from '@angular/core';
import { HttpService } from './shared/services/http.service';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ifElseCloudTask';
  isLoading: boolean = false
  private _loaderService = inject(LoaderService)
  ngOnInit(): void {
    this._loaderService.loaderBSubObs$
      .subscribe(res => this.isLoading = res)
  }

}
