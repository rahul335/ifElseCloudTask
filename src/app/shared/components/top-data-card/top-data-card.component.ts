import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Icards } from '../../models/cards';
import { datacardArry } from '../../consts/navlink';

@Component({
  selector: 'app-top-data-card',
  templateUrl: './top-data-card.component.html',
  styleUrls: ['./top-data-card.component.scss']
})
export class TopDataCardComponent implements OnInit, OnChanges {
  @Input() top_cards !:Array<Icards>
  datacardIconArry : Array<string>  = datacardArry;
  constructor() { }

  ngOnChanges(){
    console.log(this.top_cards);
    this.datacardIconArry.forEach((icon, index) =>{
      this.top_cards[index].iconCode = icon
    })
  }
  ngOnInit(): void {
    
  }
}
