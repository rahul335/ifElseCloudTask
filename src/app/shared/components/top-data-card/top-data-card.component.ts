import { Component, Input, OnInit } from '@angular/core';
import { Icards } from '../../models/cards';
import { datacardArry } from '../../consts/navlink';

@Component({
  selector: 'app-top-data-card',
  templateUrl: './top-data-card.component.html',
  styleUrls: ['./top-data-card.component.scss']
})
export class TopDataCardComponent implements OnInit {
  @Input() top_cards !:Array<Icards>
  datacardArry : Array<string> = datacardArry
  constructor() { }
  ngOnInit(): void {
  }
}
