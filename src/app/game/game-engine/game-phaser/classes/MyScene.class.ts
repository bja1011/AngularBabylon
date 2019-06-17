import { Scene, Types } from 'phaser';
import { MySceneConfig } from '../interfaces/phaser.interfaces';

export class MyScene extends Scene {
  constructor(config: MySceneConfig) {
    super(config);
  }

}
