import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game.service';
import { Engines } from '../../../game-engine/interfaces/game.interfaces';

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.scss']
})
export class MainUiComponent implements OnInit {

  constructor(private gameService: GameService,
  ) {
  }

  ngOnInit() {
  }

  setEngine(engineId: number) {
    this.gameService.gameEmitter.emit({
      name: 'set-engine',
      value: engineId
    });
  }
}
