import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile = {
    image: '../../assets/images/rsmith-grand_canyon.jpg',
    name: {
      prefix: 'Mr.',
      first: 'Richard',
      last: 'Smith',
      middle: 'R.',
      suffix: 'III'
    },
    contact: {
      email: 'rsmith@activoter.us',
      phone: '617-417-2179'
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
