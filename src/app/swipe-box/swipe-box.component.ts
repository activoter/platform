import { Component, OnInit } from '@angular/core'
import { ActivoterApiService } from '../activoter-api.service'
import 'hammerjs'

@Component({
  selector: 'app-swipe-box',
  templateUrl: './swipe-box.component.html',
  styleUrls: ['./swipe-box.component.scss'],
  providers: [ActivoterApiService]
})

export class SwipeBoxComponent implements OnInit {

    constructor(private api: ActivoterApiService) { }

	SWIPE_ACTION = {
        LEFT: 'swipeleft',
        RIGHT: 'swiperight',
        UP: 'swipeup',
        DOWN: 'down',
    }

	ballots = []

    getData(route) {

        let ballot_collection = this.api.retrieveData(route)

        this.ballots.push(ballot_collection)

        let responder = (collection) => {
            console.log(collection.length + ' // ' + collection)
            for (let item of collection) {

                console.log('Ballot retrieved: ID ' + item._id + ' // ' + item)
                item.visible = false
            }
            collection[0].visible = true
        }

        responder(this.ballots)
    }

	swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
        const isLast = currentIndex === this.ballots.length - 1
        const isFirst = currentIndex === 0
	    if (currentIndex > this.ballots.length || currentIndex < 0) return;
	    let nextIndex = 0
	    if (action === this.SWIPE_ACTION.RIGHT) {
            this.ballots[currentIndex].vote = false
	        nextIndex = isLast ? 0 : currentIndex + 1
	    }
	    if (action === this.SWIPE_ACTION.LEFT) {
            this.ballots[currentIndex].vote = true
            nextIndex = isLast ? 0 : currentIndex + 1
	        // nextIndex = isFirst ? this.ballots.length - 1 : currentIndex - 1
	    }
	    this.ballots.forEach((x, i) => x.visible = (i === nextIndex))
	}

	ngOnInit() {
        this.getData('ballots')
    }
}