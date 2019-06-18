import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyGame } from '../classes/MyGame.class';
import { MyGameConfig } from '../interfaces/phaser.interfaces';
import { MainScene } from '../scenes/Main.scene';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-phaser',
  templateUrl: './phaser.component.html',
  styleUrls: ['./phaser.component.scss']
})
export class PhaserComponent implements OnInit, OnDestroy {

  game: MyGame;

  constructor(private gameService: GameService,
  ) {
  }

  ngOnInit() {
    const config: MyGameConfig = {
      type: Phaser.AUTO,
      width: innerWidth * devicePixelRatio,
      height: innerHeight * devicePixelRatio,
      parent: 'game',
      gameService: this.gameService,
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      scene: new MainScene({
        gameService: this.gameService,
      })
    };
    this.game = new MyGame(config);
  }

  ngOnDestroy(): void {
    this.game.destroy(true);
  }
}
