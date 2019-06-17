import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBabylonModule } from './game-babylon/game-babylon.module';
import { EngineComponent } from './engine/engine.component';
import { GamePhaserModule } from './game-phaser/game-phaser.module';

@NgModule({
  declarations: [EngineComponent],
  imports: [
    CommonModule,
    GameBabylonModule,
    GamePhaserModule,
  ],
  exports: [
    EngineComponent,
  ],
})
export class GameEngineModule {
}
