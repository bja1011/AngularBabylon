import { GameObjects } from 'phaser';
import { JellyBody, JellyFace } from './interfaces/jelly';
import { MyScene } from '../classes/MyScene.class';
import { JELLY_ATLAS_NAME } from './constants';

export class Jelly extends GameObjects.Container {

  body: GameObjects.Sprite;
  face: GameObjects.Sprite;
  shadow: GameObjects.Sprite;

  constructor(scene: MyScene, x: number, y: number) {
    super(scene, x, y);

    this.scene.add.existing(this);

    this.shadow = this.scene.add.sprite(0, 120, JELLY_ATLAS_NAME, 'shadow.png');
    this.add(this.shadow);

    this.body = this.scene.add.sprite(0, 0, null);
    this.body.setOrigin(0.5);
    this.add(this.body);

    this.face = this.scene.add.sprite(0, 60, null);
    this.face.setOrigin(0.5);
    this.add(this.face);
  }

  setBody(type: JellyBody) {
    this.body.setTexture(JELLY_ATLAS_NAME, `${type}.png`);
  }

  setFace(type: JellyFace) {
    this.face.setTexture(JELLY_ATLAS_NAME, `${type}.png`);
  }
}
