import { Component, OnInit } from '@angular/core'
import { ActivoterApiService } from '../activoter-api.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers: [ActivoterApiService]
})

export class LoginComponent implements OnInit {

	constructor(private api: ActivoterApiService) { }

	user = {}

	login(formData) {
		console.log(formData)
		return this.api.createData('login', formData)
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