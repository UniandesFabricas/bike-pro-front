import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirect(routePath) {
    this.route.navigate([routePath]);
  }

}
