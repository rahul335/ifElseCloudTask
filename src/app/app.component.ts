import { Component, OnInit, inject } from '@angular/core';
import { HttpService } from './shared/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'ifElseCloudTask';


  ngOnInit(): void {

  }

}
