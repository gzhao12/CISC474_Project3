import { Component } from '@angular/core';
import { AuthService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Course-a-saurus';
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
