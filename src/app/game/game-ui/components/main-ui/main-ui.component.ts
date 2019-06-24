import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { GameService } from '../../../services/game.service';
import { JellyBody, JellyFace } from '../../../game-engine/game-phaser/virtual-pet-game/interfaces/jelly';
import { randomEnumValue } from '../../../Utils';

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
    this.gameService.emitGameEvent('setEngine', engineId);
  }

  randomizeJelly() {
    this.randomizeBody();
    this.randomizeFace();
  }

  randomizeBody() {
    this.gameService.emitGameEvent('setBody', randomEnumValue(JellyBody));
  }

  randomizeFace() {
    this.gameService.emitGameEvent('setFace', randomEnumValue(JellyFace));
  }
}
