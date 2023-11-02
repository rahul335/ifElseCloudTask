import { Component, Input, OnInit } from '@angular/core';
import { InewUser } from '../../models/cards';
@Component({
  selector: 'app-registrations-card',
  templateUrl: './registrations-card.component.html',
  styleUrls: ['./registrations-card.component.scss']
})
export class RegistrationsCardComponent implements OnInit {
 @Input() new_users !: Array<InewUser>
  constructor() { }
  ngOnInit(): void {
  }
}
