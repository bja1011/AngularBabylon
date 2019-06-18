import { Scene, Types } from 'phaser';
import { MySceneConfig } from '../interfaces/phaser.interfaces';
import { GameService } from '../../../services/game.service';

export class MyScene extends Scene {

  gameService: GameService;

  constructor(config: MySceneConfig) {
    super(config);
    this.gameService = config.gameService;
  }

  init() {
    this.scale.on('resize', () => {
      this.cameras.resize(innerWidth, innerHeight);
    });
  }

}
