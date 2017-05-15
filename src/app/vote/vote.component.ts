import { Component, OnInit } from '@angular/core';
import { ActivoterApiService } from '../activoter-api.service'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
  providers: [ActivoterApiService]
})

export class VoteComponent implements OnInit {

  constructor(private api: ActivoterApiService) { }

  user = {
  	voter: true
  }
  toggle = () => this.user.voter = !this.user.voter

  ballots = []

  getBallots() {
    this.ballots.push(this.api.retrieveData('ballots'))
    let responder = (collection) => {
      for (let item of collection) {
        console.log('Ballot retrieved: ID ' + item._id)        
      }
    }
    responder(this.ballots)
  }

  ngOnInit() { }
}