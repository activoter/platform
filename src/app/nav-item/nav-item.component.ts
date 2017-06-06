import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})

export class NavItemComponent implements OnInit {

  constructor() { }

  pages = [
    {name: 'profile'},
    {name: 'vote'},
    {name: 'explore'},
    {name: 'learn'},
    {name: 'support'},
    {name: 'contact'},
    {name: 'login'}
  ]

  ngOnInit() { }

}
