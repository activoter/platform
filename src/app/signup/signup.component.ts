import { Component, OnInit } from '@angular/core'
import { ActivoterApiService } from '../activoter-api.service'

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss'],
	providers: [ActivoterApiService]
})

export class SignupComponent implements OnInit {

	constructor(private api: ActivoterApiService) { }

	form = {}

	user = {}

	signup(formData) {
		console.log(formData)
		return this.api.createData('signup', formData)
			.subscribe(
				res => {
					console.log(res)
					this.user = res
				},
				error => console.log(error)
			)
	}

	ngOnInit() { }

}