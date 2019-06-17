import { Component, OnInit } from '@angular/core';
import { MyGame } from '../classes/MyGame.class';
import { MyGameConfig } from '../interfaces/phaser.interfaces';
import { MyScene } from '../classes/MyScene.class';

@Component({
  selector: 'app-phaser',
  templateUrl: './phaser.component.html',
  styleUrls: ['./phaser.component.scss']
})
export class PhaserComponent implements OnInit {

  game: MyGame;

  constructor() {
  }

  ngOnInit() {
    const config: MyGameConfig = {
      type: Phaser.AUTO,
      width: innerWidth,
      height: innerHeight,
      parent: 'game',
      scene: new MyScene({
        gameService: null
      })
    };
    this.game = new MyGame(config);
  }

}
