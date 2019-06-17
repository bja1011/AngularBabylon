import { Component, OnInit } from '@angular/core';
import { MyGame } from '../classes/MyGame.class';
import { MyGameConfig } from '../interfaces/phaser.interfaces';
import { MainScene } from '../scenes/Main.scene';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-phaser',
  templateUrl: './phaser.component.html',
  styleUrls: ['./phaser.component.scss']
})
export class PhaserComponent implements OnInit {

  game: MyGame;

  constructor(private gameService: GameService,
  ) {
  }

  ngOnInit() {
    const config: MyGameConfig = {
      type: Phaser.AUTO,
      width: innerWidth,
      height: innerHeight,
      parent: 'game',
      scene: new MainScene({
        gameService: this.gameService
      })
    };
    this.game = new MyGame(config);
  }
}
