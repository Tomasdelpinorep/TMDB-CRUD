import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  https: any;
title = environment.title;
  constructor(private authService: AuthenticationService) {}
  requestToken!: string;

  logIn() {
    this.authService.getRequestToken().subscribe((resp) => {
      sessionStorage.setItem('REQUEST_TOKEN', resp.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${sessionStorage.getItem(
        'REQUEST_TOKEN'
      )}?redirect_to=http://localhost:4200/approved`;
    });
  }

  isSessionNull(): any {
    if (sessionStorage.getItem('SESSION_ID') == null) return true;

    return false;
  }

  logOut() {
    this.authService.deleteSession(sessionStorage.getItem('SESSION_ID')).subscribe(() => {
      sessionStorage.removeItem('REQUEST_TOKEN');
      sessionStorage.removeItem('SESSION_ID');

      window.location.href = 'http://localhost:4200/home'; 
    });
  }
  
}