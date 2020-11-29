import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboar',
  templateUrl: './dashboar.page.html',
  styleUrls: ['./dashboar.page.scss'],
})
export class DashboarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate(route){
    this.router.navigate(['login']);
  }
}
