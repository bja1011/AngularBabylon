import { Game } from 'phaser';
import { MyGameConfig } from '../interfaces/phaser.interfaces';

export class MyGame extends Game {

  constructor(config: MyGameConfig) {
    super(config);
  }
}


