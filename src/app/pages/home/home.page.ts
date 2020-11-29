import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
    if(this.auth.getToken()){
      console.log("dash")
      this.router.navigate(['/dash']);
    }else {
      this.router.navigate(['/login']);
      console.log("login")
    }
   }

  ngOnInit() {
  }

}
