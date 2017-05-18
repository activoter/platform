import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.scss'],
  inputs: ['measure']
})

export class MeasureComponent implements OnInit {
  
  constructor() { }

  open = false

  toggle() {
    this.open = !this.open
  }

  ngOnInit() { }

}
