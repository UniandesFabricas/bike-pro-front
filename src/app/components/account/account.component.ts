import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  showAll = true;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.showAll = sessionStorage.getItem('userAuth') !== undefined && sessionStorage.getItem('userAuth') !== null
     && sessionStorage.getItem('userAuth') === 'true' ? false : true;
  }

  redirect(routePath) {
    this.route.navigate([routePath]);
  }

}
