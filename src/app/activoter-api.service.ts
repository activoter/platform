import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class ActivoterApiService {
  constructor(private http: Http) { }
  retrieveData(route) {
	return this.http.get(`https://activoter-api.herokuapp.com/${route}`)
		.map(data => data.json())
//		.subscribe(route => this.data = route)
  }
}