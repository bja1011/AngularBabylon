import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game.service';
import { JellyBody, JellyFace } from '../../../game-engine/game-phaser/virtual-pet-game/interfaces/jelly';
import { randomEnumValue } from '../../../Utils';

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.scss']
})
export class MainUiComponent implements OnInit {

  constructor(private gameService: GameService,
  ) {
  }

  ngOnInit() {
  }

  setEngine(engineId: number) {
    this.gameService.emitGameEvent('setEngine', engineId);
  }

  randomizeJelly() {
    this.gameService.emitGameEvent('setFace', randomEnumValue(JellyFace));
    this.gameService.emitGameEvent('setBody', randomEnumValue(JellyBody));
  }
}
