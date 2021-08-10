import { Component } from '@angular/core';
import { LoginService } from '../auth/service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private service : LoginService
  ) {}

  logout(){
    this.service.logout();
  }
}
