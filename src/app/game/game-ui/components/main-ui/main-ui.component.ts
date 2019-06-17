import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { GameService } from '../../../services/game.service';
import { Engines } from '../../../game-engine/interfaces/game.interfaces';

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.scss']
})
export class MainUiComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private gameService: GameService,
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

  setEngine(engineId: number) {
    this.gameService.gameEmitter.emit({
      name: 'set-engine',
      value: engineId
    });
  }
}
