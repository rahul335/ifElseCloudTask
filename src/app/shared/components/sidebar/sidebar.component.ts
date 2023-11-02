import { Component, OnInit } from '@angular/core';
import { sidenavArry } from '../../consts/navlink';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidenavArry : Array<string> = sidenavArry
  constructor() { }
  ngOnInit(): void {
  }
}
