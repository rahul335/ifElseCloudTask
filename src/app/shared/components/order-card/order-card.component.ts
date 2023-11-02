import { Component, Input, OnInit } from '@angular/core';
import { IrecentUser } from '../../models/cards';
@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {
  @Input() recent_orders !: Array<IrecentUser>
  constructor() { }
  ngOnInit(): void {
  }
}
