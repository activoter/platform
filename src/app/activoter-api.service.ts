import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class ActivoterApiService {

	constructor(private http: Http) { }

	retrieveData(route) {
		return this.http.get(`https://activoter-api.herokuapp.com/${route}`)
			.map(data => data.json())
	}

	createData(route, data) {
		return this.http.post(`https://activoter-api.herokuapp.com/${route}`, data)
			.map(data => data.json())
	}

}