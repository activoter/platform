import { Component } from '@angular/core'
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import { ActivoterApiService } from './activoter-api.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//  providers: [ActivoterApiService]
})

export class AppComponent {
/*
  constructor(private api: ActivoterApiService) { }

  user = {}

/*
  login(formData) {
    console.log(formData)
    this.api.createData('login', formData)
      .map(
        res => console.log(res)
      )
      /*
      .subscribe(
        res => {
          console.log(res)
          this.user = res
        },
        error => console.log(error)
      )
  }
      */

}