import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  pages = [
  	{name: 'vote'},
  	{name: 'learn'},
  	{name: 'profile'},
  	{name: 'contact'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
