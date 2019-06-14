import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { GameEngineModule } from './game-engine/game-engine.module';

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    GameEngineModule,
  ],
  exports: [GameComponent]
})
export class GameModule {
}
