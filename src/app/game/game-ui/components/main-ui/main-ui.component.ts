import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.scss']
})
export class MainUiComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        this.router.navigate(['auth']);
      });
  }

}
