export interface AngularGame {
  gameEngine: Engines;
}

export enum Engines {
  phaser = 0,
  babylon = 1,
}

export interface GameEvent {
  name: string;
  value: any;
}
