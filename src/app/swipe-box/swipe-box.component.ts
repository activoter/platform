import { Component, OnInit } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-swipe-box',
  templateUrl: './swipe-box.component.html',
  styleUrls: ['./swipe-box.component.scss']
})
export class SwipeBoxComponent implements OnInit {
	SWIPE_ACTION = {
        LEFT: 'swipeleft',
        RIGHT: 'swiperight',
        UP: 'swipeup',
        DOWN: 'down',
    };
	items = [
	    {
	        name: 'Tax Plan',
	        image: '../../assets/images/thumb-constitution.jpg',
	        visible: true,
            vote: null
	    },
        {
            name: 'Healthcare',
            image: '../../assets/images/thumb-constitution.jpg',
            visible: false,
            vote: null
        },
        {
            name: 'Military Budget',
            image: '../../assets/images/thumb-constitution.jpg',
            visible: false,
            vote: null
        },
        {
            name: 'Social Security',
            image: '../../assets/images/thumb-constitution.jpg',
            visible: false,
            vote: null
        }
	];
	swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
        const isLast = currentIndex === this.items.length - 1;
        const isFirst = currentIndex === 0;
	    if (currentIndex > this.items.length || currentIndex < 0) return;
	    let nextIndex = 0;
	    if (action === this.SWIPE_ACTION.RIGHT) {
            this.items[currentIndex].vote = false;
	        nextIndex = isLast ? 0 : currentIndex + 1;
	    }
	    if (action === this.SWIPE_ACTION.LEFT) {
            this.items[currentIndex].vote = true;
            nextIndex = isLast ? 0 : currentIndex + 1;
	        // nextIndex = isFirst ? this.items.length - 1 : currentIndex - 1;
	    }
	    this.items.forEach((x, i) => x.visible = (i === nextIndex));
	};
	constructor() { };
	ngOnInit() { };
}