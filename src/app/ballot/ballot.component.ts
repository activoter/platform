import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.scss'],
  inputs: ['ballot']
})

export class BallotComponent implements OnInit {

  constructor() { }

  open = false

  toggle() {
    this.open = !this.open
  }

  ngOnInit() { }

}