import { EventEmitter, Injectable } from '@angular/core';
import { AngularGame, GameEvent } from '../game-engine/interfaces/game.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameEmitter: EventEmitter<GameEvent> = new EventEmitter();
  game: AngularGame;

  constructor() {
  }

  emitGameEvent(name: string, value: any) {
    this.gameEmitter.emit({name, value});
  }
}
