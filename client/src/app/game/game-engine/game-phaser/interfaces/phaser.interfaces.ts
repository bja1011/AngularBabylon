import { Types } from 'phaser';
import { GameService } from '../../../services/game.service';

export interface MyGameConfig extends Types.Core.GameConfig {
  gameService?: GameService;
}

export interface MySceneConfig extends Types.Scenes.SettingsConfig {
  gameService: GameService;
}
