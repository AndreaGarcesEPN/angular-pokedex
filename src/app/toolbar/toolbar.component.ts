import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  userData: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userSubject$.subscribe((ret) => {
      this.userData = ret;
    });
  }

  logout() {
    this.authService.logout();
  }

}
