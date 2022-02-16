import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
  data: {
    name: '';
    email: '';
    message: '';
    occupation: '';
    contact: '';
  };

  constructor(private router: Router) {}

  ngOnInit() {
    const subscribeData = this.router.getCurrentNavigation().extras.state;
    this.data = {
      name: subscribeData.subData.name,
      email: subscribeData.subData.email,
      message: subscribeData.subData.message,
      occupation: subscribeData.subData.occupation,
      contact: subscribeData.subData.contact,
    };
  }
}
