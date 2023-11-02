import { Component, OnInit, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Icards, ImainRes, InewUser, IrecentUser } from '../../models/cards';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private _httpService = inject(HttpService);
  new_users !: Array<InewUser>;
  recent_orders !: Array<IrecentUser>;
  top_cards !: Array<Icards>;
  constructor() { }
  ngOnInit(): void {
    this._httpService.getData()
    .subscribe((res : ImainRes) =>{
      this.new_users = res.new_users
      this.recent_orders = res.recent_orders
      this.top_cards = res.top_cards
    })
  }
}
