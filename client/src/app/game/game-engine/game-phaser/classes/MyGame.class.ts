import { Game } from 'phaser';
import { MyGameConfig } from '../interfaces/phaser.interfaces';
import { GameService } from '../../../services/game.service';

export class MyGame extends Game {

  gameService: GameService;

  constructor(config: MyGameConfig) {
    super(config);
    this.gameService = config.gameService;
  }
}


