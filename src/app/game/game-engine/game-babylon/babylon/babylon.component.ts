import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyGame } from '../classes/MyGame.class';

@Component({
  selector: 'app-babylon',
  templateUrl: './babylon.component.html',
  styleUrls: ['./babylon.component.scss']
})
export class BabylonComponent implements OnInit, OnDestroy {

  game: MyGame;

  constructor() {
  }

  ngOnInit() {
    this.game = new MyGame('bjs-game');
    this.game.createScene();
    this.game.doRender();
  }

  ngOnDestroy(): void {
    this.game.destroy();
  }
}
