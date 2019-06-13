import { Component, OnInit } from '@angular/core';
import { MyGame } from '../classes/MyGame.class';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: MyGame;
  constructor() { }

  ngOnInit() {
    this.game = new MyGame('game');
    this.game.createScene();
    this.game.doRender();
  }
}
