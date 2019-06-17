import { Types } from 'phaser';

export interface MyGameConfig extends Types.Core.GameConfig {
  gameService?: unknown;
}

export interface MySceneConfig extends Types.Scenes.SettingsConfig {
  gameService: unknown;
}
