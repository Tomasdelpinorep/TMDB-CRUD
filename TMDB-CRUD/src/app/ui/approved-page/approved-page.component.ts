import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-approved-page',
  templateUrl: './approved-page.component.html',
  styleUrl: './approved-page.component.css'
})
export class ApprovedPageComponent {
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void { //Falta comprobar si el request token ha sido aceptado o denegado
    this.authService.createSession().subscribe(resp => {
      sessionStorage.setItem('SESSION_ID', resp.session_id);
      window.location.href = `http://localhost:4200/home`;
    });
  }

}