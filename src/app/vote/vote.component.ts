import { Component, OnInit } from '@angular/core'
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
  	voter: false
  }

  toggle = () => this.user.voter = !this.user.voter

  ballots = []

  getBallots() {
    this.api.retrieveData('ballots')
      .subscribe(
        res => {
          console.log(res)
          this.ballots = res
        },
        error => console.log(error)
      )
  }

  ngOnInit() {
    this.getBallots()
  }

}