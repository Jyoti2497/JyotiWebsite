import { Component } from '@angular/core';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private regSer: RegisterServiceService) { }
  logout() {
    // this.regSer.signOut();
    // this.regSer.forceRefreshSession();
  }
}
